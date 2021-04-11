const Discord = require('discord.js');
module.exports = {
	name: "ban",
	aliases: ["bonk","boop"],
	description: "Ban Command",
	usage: "k!ban",
	category: "Misc",
  userPermissions: ['BAN_MEMBERS'],
  execute(message, args) {
		const user = message.mentions.users.first();
    message.guild.members.ban(user);
    message.channel.send(`${user} was banned from the guild.`)
	},
};
