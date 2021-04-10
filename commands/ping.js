module.exports = (bot, message, args) => {
        if (message.content === `k!ping`) {
            const pingEmbed = new Discord.MessageEmbed()
                .setTitle('Pong! 🏓')
                .setColor('#d9d332')
                .setDescription(`The bots ping is ${Date.now() - message.createdTimestamp}ms`)
                .setFooter('King Bot')
                .setTimestamp()
            message.channel.send(pingEmbed)
        }
};
module.exports.ping = {
	name: "ping",
	aliases: ["ping"],
	description: "Ping Command",
	usage: "k!ping",
	category: "Misc",
  execute(message,args) {
            const pingEmbed = new Discord.MessageEmbed()
                .setTitle('Pong! 🏓')
                .setColor('#d9d332')
                .setDescription(`The bots ping is ${Date.now() - message.createdTimestamp}ms`)
                .setFooter('King Bot')
                .setTimestamp()
            message.channel.send(pingEmbed)
  }
        }
};
};