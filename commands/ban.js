const Discord = require('discord.js');
module.exports = {
	name: "ban",
	aliases: ["bonk","boop"],
	description: "Ban Command",
	usage: "--ban",
	category: "Moderation",
  userPermissions: ['BAN_MEMBERS'],
  execute(message, args) {
    if (message.member.hasPermission("BAN_MEMBERS")) {
    try {
		const user = message.mentions.users.first();
    message.guild.members.ban(user) 
    .then(`${user} was banned from the guild.`)
            } catch(err) {
              console.error()
              message.reply(new Discord.MessageEmbed().setTitle("There was an Error").addField("Error:", "```" + `${error}` + "```").setColor('#f2d305').setFooter('King Bot').setTimestamp());
    }
    }
	},
};