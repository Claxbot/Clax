const Discord = require('discord.js');
const client = new Discord.Client();
var catNames = require('cat-names');

exports.run = (client, message) => {
        name = catNames.random()
        message.channel.send(name)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'kedi-adı',
  description: 'Bot rastgele kedi adı söyler.',
  usage: 'kedi-adı'
};
