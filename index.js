//requiring
const Discord = require('discord.js');

const fs = require("fs");

const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandfiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//presence and ready message and some constants
const prefix = "k!"
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
client.once('ready', () => {
    console.log(`Ready! Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: 'dnd',
        activity: {
            type: 'PLAYING',
            name: 'Ruling my Kingdom',
        }
    });
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
    //error logging
    client.on('shardError', error => {
        console.error('A websocket connection encountered an error:', error);
    });

    process.on('unhandledRejection', error => {
        console.error('Unhandled promise rejection:', error);
    });
    //start of actual code
    client.on('message', async message => {
        if (message.content.startsWith(`${prefix}eval`)) {
            try {
                const evalembed = new Discord.MessageEmbed()
                    .setTitle("Eval")
                    .addField("Input", result)
                    .setFooter("King Bot")
                    .setColor("#d9d332")
                    .setTimestamp()
                message.channel.send(evalembed)
                const result = message.content.split(" ").slice(1).join(" ")
                const output = await eval(result)
                message.reply(evalembed().addField("Output", output))
            } catch (err) {
                message.channel.send(new Discord.MessageEmbed().setColor("#d9d332").addField("Error", console.error));
            };
        };
    });
});
//login
client.login(process.env.token)