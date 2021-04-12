const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
	name: "fox",
	aliases: ["floof"],
	description: "A wild floof",
	usage: "k!fox",
	category: "Misc",
  userPermissions: ['SEND_MESSAGES'],
  async execute(message, args) {       
      try {
        if (message.content === `k!fox`) {
          const { image } = await fetch('https://randomfox.ca/floof/?ref=apilist.fun').then(response => response.json());
            const foxembed = new Discord.MessageEmbed()
              .setTitle('A Fox!')
              .setColor('#f2d305')
              .setImage(image)
              .setFooter('King Bot')
              .setTimestamp()
          message.channel.send(foxembed);
        }
        } catch(err) {
          console.error();
          message.channel.send(error);
        }
        }
  };