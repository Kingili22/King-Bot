const Discord = require('discord.js');
const fetch = require('node-fetch');
const msg = 'message';
module.exports = {
	name: "dog",
	aliases: ["dog"],
	description: "A wild doge",
	usage: "k!dog",
	category: "Misc",
  userPermissions: ['SEND_MESSAGES'],
  async execute(msg, args) {       
      try {
          let { message } = await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json());
            const dogEmbed = new Discord.MessageEmbed()
              .setTitle('A Dog!')
              .setColor('#f2d305')
              .setImage(message)
              .setFooter('King Bot')
              .setTimestamp()
          msg.channel.send(dogEmbed);
        } catch(err) {
          console.error();
        }
        }
  };
