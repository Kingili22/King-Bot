const Discord = require('discord.js');
const fetch = require('node-fetch');
const toLowerCase = require('discord.js');
module.exports = {
	name: "weather",
	aliases: ["temperature"],
	description: "The Temperature",
	usage: "--weather",
	category: "Fun",
  userPermissions: ['SEND_MESSAGES'],
  async execute(message, args) {   
	    const command = args.shift().toLowerCase();  
      const result = message.content.split(" ").slice(1).join(" ") 
          const { temperature } = await fetch(`https://goweather.herokuapp.com/weather/${result}`).then(response => response.json());
          const { description } = await fetch(`https://goweather.herokuapp.com/weather/${result}`).then(response => response.json());
          const { wind } = await fetch(`https://goweather.herokuapp.com/weather/${result}`).then(response => response.json());
          const x = parseInt(temperature.slice(1));
          const y = parseInt(temperature.slice(1));
          x2 = (x*1.8)+32
          y2 = (y/1.609)
          x3 = x2.toFixed(2)
          y3 = y2.toFixed(2)
            const tempembed = new Discord.MessageEmbed()
              .setTitle('The Weather Today')
              .setColor('#f2d305')
              .addField('Forecast' , description)
              .addField('Temperature', x3 + ' °F')
              .addField('Wind Speed', y3 + ' MPH')
              .setFooter('King Bot')
              .setTimestamp()
          message.channel.send(tempembed);
          if (!temperature.length) {
            return message.channel.send(`No results found for **${args.join(' ')}**.`)
        }
  }
};