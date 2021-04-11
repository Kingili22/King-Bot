const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Sends the Bots Ping!',
  usage: "k!ping",
  userPermissions: ['SEND_MESSAGES'],
	execute(message, args) {
		 message.reply(new Discord.MessageEmbed().setTitle('Pong! 🏓').setDescription(`The bots ping is ${Date.now() - message.createdTimestamp}ms`).setFooter('King Bot').setTimestamp().setColor('#f2d305'))
	},
};