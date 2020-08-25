const Discord = require('discord.js');
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Test embed`)
    .setColor(`BLUE`)
    .setDescription(`Hi hello, it's simple embed command`)
    .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(embed)

}

module.exports.config = {
    name: "embed",
    description: "Simple embed",
    usage: "!embed",
    accessableby: "Members",
    aliases: []
}