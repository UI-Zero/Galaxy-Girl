const Discord = require("discord.js")
const Enmap = require("enmap")
const fs = require("fs")
const client = new Discord.Client();
const config = require("./config.json")
client.config = config;

fs.readdir("./Events", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        const event = require(`./Events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./Events/${file}`)];
    });
});

client.commands = new Enmap();

fs.readdir("./Commands/", (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./Commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Loading ${commandName}`);
        client.commands.set(commandName, props)
    });
});

client.login(config.token);