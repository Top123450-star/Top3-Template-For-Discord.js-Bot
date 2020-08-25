    const Discord = require('discord.js')

    module.exports = bot => {
 
            const wzmianka = [`<@!${bot.user.id}>`, `<@${bot.user.id}>`]
            for (o=0;o<=wzmianka.length;o++){
             
            if (message.content == wzmianka[o]) {
             
            const embed = new Discord.MessageEmbed()
            .setTitle(`**${client.user.username}**`)
            .setDescription(`Hello <@${message.author.id}>!\n\n🤖 
            My prefix is ​​**?**, all my commands can be found under ?help\n\n<:devjs:743223291015200929> My developers:\n<@480126135217291286>\n<@514148663736401923>\n<@503160314804568065>\n<@697495233738571807>`)
            .setFooter(`Invoked by: ${message.author.username}`, message.author.avatarURL())
            .setColor(`GREEN`)
            message.channel.send(embed)
                }
            }}
            
        