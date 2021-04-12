//requiring
const Discord = require('discord.js');

const fs = require("fs");

const fetch = require('node-fetch');

const client = new Discord.Client();

client.commands = new Discord.Collection();
//presence and ready message and some constants
const prefix = "k!"
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
};
client.once('ready', () => {
    console.log(`Ready! Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: 'online',
        activity: {
            type: 'PLAYING',
            name: 'Ruling my Kingdom',
        }
    });
});
    //error logging
    client.on('shardError', error => {
        console.error('A websocket connection encountered an error:', error);
    });

    process.on('unhandledRejection', error => {
        console.error('Unhandled promise rejection:', error);
    });
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

//login
client.login(process.env.token)