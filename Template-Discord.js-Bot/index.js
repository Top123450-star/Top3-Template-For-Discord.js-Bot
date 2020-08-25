const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "NzQ3NjA1MjcyNDgyMjgzNjQx.X0RTqg.xOjOH5RslEms3A_7abznszBgTDA";
const PREFIX = "!";
 
const fs = require('fs');
bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./src/commands/${file}`);
 
    bot.commands.set(command.name, command);
}
 
bot.on('ready', () => {
    console.log("The bot is active and ready to go!");
});
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
 
        case "ping":
            bot.commands.get('ping').execute(message, args);
        break;
 
        case "hello":
            bot.commands.get('hello').execute(message, args);
        break;

        case "test":
            bot.commands.get('test').execute(message, args);
        break;
    }
 
});
 
bot.login(token);