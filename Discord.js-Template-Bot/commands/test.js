const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    
    message.channel.send(`Simple test command :)`)

}

module.exports.config = {
    name: "test",
    description: "Simple test command",
    usage: "!test",
    accessableby: "Members",
    aliases: []
}