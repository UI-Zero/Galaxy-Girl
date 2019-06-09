exports.run = (client, message, args) => {
  message.delete().catch(O_o=>{});
  client.emit('guildMemberAdd', message.member || message.guild.fetchMember(message.author));
};

exports.help = {
    name: "join"
}
