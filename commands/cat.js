const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
	name: "cat",
	aliases: ["catto"],
	description: "A wild catto",
	usage: "k!cat",
	category: "Misc",
  userPermissions: ['SEND_MESSAGES'],
  async execute(message, args) {       
      try {
          const { url } = await fetch('https://rory.cat/purr').then(response => response.json());
            const catEmbed = new Discord.MessageEmbed()
              .setTitle('A Cat!')
              .setColor('#f2d305')
              .setImage(url)
              .setFooter('King Bot')
              .setTimestamp()
          message.channel.send(catEmbed);
        } catch(err) {
          console.error();
          message.channel.send(error);
        }
        }
  };