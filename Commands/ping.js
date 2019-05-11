exports.run = (client, message, args) => {
  message.delete().catch(O_o=>{});
    message.channel.send("Pong!").catch(console.error).then(message => {message.delete(5000)});
}

exports.help = {
    name: "ping"
}