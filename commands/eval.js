const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
	name: "eval",
	aliases: [],
	description: "Evaluates a command inside of Discord",
	usage: "k!eval",
	category: "Misc",
  userID: "535235896530960395",
  async execute (message, args) {
    try {
    if(message.author.id !== "535235896530960395") return;
    const result = message.content.split(" ").slice(1).join(" ")
    const output = eval(result)
    message.reply(new Discord.MessageEmbed().setTitle("Eval").addField("Input", "```" + `${result}`+ "```").addField("Output", "```" + `${output}` + "```").setColor('#f2d305').setFooter('King Bot').setTimestamp())
    }catch(error) {
    console.error()
    message.reply(new Discord.MessageEmbed().setTitle("There was an Error").addField("Error:", "```" + `${error}` + "```").setColor('#f2d305').setFooter('King Bot').setTimestamp());

	}
  }
  };