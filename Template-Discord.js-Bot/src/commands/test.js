
const Discord = require("discord.js");

module.exports = {
    name: 'test',
    description: "Simple test command!",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle(`Simple test`)
        .setColor(`GREEN`)
        .setDescription(`Test command`)
        .setFooter(message.author.tag, message.author.avatarURL())
        message.channel.send(embed);
    }
}