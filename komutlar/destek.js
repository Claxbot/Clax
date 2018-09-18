const Discord = require('discord.js');

exports.run = async(client, message, args) => {
const emoji = message.client.emojis.get('');
      let isEnabled;
      message.reply("Komutu kulland�g�n�z i�in te��ek�r ederiz.");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "490424057192513547";
      const embed = new Discord.RichEmbed()
        .addField('Dikkat', ` Canl� Destek �a�r�s�`)
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
        .setColor("RANDOM")
        .addField(`Bilgiler`, `**Sunucu**: ${message.guild.name} (${message.guild.id}) \n**Kanal**: ${message.channel.name} (${message.channel.id}) \n**Destek �steyen**: ${message.author.tag} (${message.author.id}) \n**Destek Mesaj�**: ${mesaj}`)
        .setFooter("")
        .setTimestamp()
      client.channels.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.get(destekKanal).send(' Destek �agr�s�na kat�lmak i�in `kat�l` yaz�n�z. sonland�rmak i�in  `kapat` yaz�n�z.')
    collector.on('message', (message) => {
      if (message.content === 'kapat') collector.stop('aborted')
      if (message.content === 'kat�l') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply(' �agr� zaman a��m�na u�rad�.')
      if (reason === 'aborted') {
        message.reply('�a�r� kapat�ld�.')
        client.channels.get(destekKanal).send(' �agr� ba�ar�yla sonland�r�ld�.')
      }
      if (reason === 'success') {
        client.channels.get(destekKanal).send(' Destek �agr�s� al�nd�!')
        client.channels.get(destekKanal).send(' Destek �a�r�s�n� sonland�rmak  i�in `kapat` yaz�n�z.')
        chan.send(`${message.author}`)
        chan.send('�agr�n�za bir yetkili taraf�ndan bak�l�yor.')
        chan.send('')
        chan.send('Destek �agr�s�n� kapatmak  i�in `kapat` yaz�n�z.')
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('kapat')) {
              message.channel.send(' �a�r� ba�ar�yla sonland�r�ld�.')
              if (message.channel.id === chan.id) client.channels.get(destekKanal).send('?? �a�r� kar�� taraftan kapat�ld�.')
              if (message.channel.id === destekKanal) chan.send(' �a�r� kar�� taraftan sonland�r�ld�.')

              return isEnabled = false
            }
            if (message.channel.id === chan.id) client.channels.get(destekKanal).send(`:telephone_receiver:  **${message.author.tag}**: ${message.content}`)
            if (message.channel.id === destekKanal) chan.send(`:telephone_receiver:  **${message.author.tag}**: ${message.content}`)
          }
          contact(client)
        })
      }
    })
}

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'canl�destek',
  description: 'Canl� Destek Tablebi Olu�turur.',
  usage: 'canl�destek'
};
