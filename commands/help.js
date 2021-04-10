module.exports.run = (bot, message, args) => {
if (message.content === `k!help`) {
  message.channel.send(`404 HELP NOT FOUND`)
}
}
module.exports.ping = {
	name: "Help",
	aliases: ["h"],
	description: "Help Command (indev)",
	usage: "k!help",
	category: "Misc",
};