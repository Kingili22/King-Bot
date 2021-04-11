const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		 message.reply(new Discord.MessageEmbed().setTitle('Pong! 🏓').setDescription(`The bots ping is ${Date.now() - message.createdTimestamp}ms`).setFooter('King Bot').setTimestamp())
	},
};