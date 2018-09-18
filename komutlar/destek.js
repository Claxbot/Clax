const Discord = require('discord.js');

exports.run = async(client, message, args) => {
const emoji = message.client.emojis.get('');
      let isEnabled;
      message.reply("Komutu kullandıgınız için teşşekür ederiz.");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "490424057192513547";
      const embed = new Discord.RichEmbed()
        .addField('Dikkat', ` Canlı Destek Çağrısı`)
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
        .setColor("RANDOM")
        .addField(`Bilgiler`, `**Sunucu**: ${message.guild.name} (${message.guild.id}) \n**Kanal**: ${message.channel.name} (${message.channel.id}) \n**Destek İsteyen**: ${message.author.tag} (${message.author.id}) \n**Destek Mesajı**: ${mesaj}`)
        .setFooter("")
        .setTimestamp()
      client.channels.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.get(destekKanal).send(' Destek çagrısına katılmak için `katıl` yazınız. sonlandırmak için  `kapat` yazınız.')
    collector.on('message', (message) => {
      if (message.content === 'kapat') collector.stop('aborted')
      if (message.content === 'katıl') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply(' Çagrı zaman aşımına uğradı.')
      if (reason === 'aborted') {
        message.reply('Çağrı kapatıldı.')
        client.channels.get(destekKanal).send(' Çagrı başarıyla sonlandırıldı.')
      }
      if (reason === 'success') {
        client.channels.get(destekKanal).send(' Destek çagrısı alındı!')
        client.channels.get(destekKanal).send(' Destek çağrısını sonlandırmak  için `kapat` yazınız.')
        chan.send(`${message.author}`)
        chan.send('Çagrınıza bir yetkili tarafından bakılıyor.')
        chan.send('')
        chan.send('Destek çagrısını kapatmak  için `kapat` yazınız.')
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('kapat')) {
              message.channel.send(' Çağrı başarıyla sonlandırıldı.')
              if (message.channel.id === chan.id) client.channels.get(destekKanal).send('?? Çağrı karşı taraftan kapatıldı.')
              if (message.channel.id === destekKanal) chan.send(' Çağrı karşı taraftan sonlandırıldı.')

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
  name: 'canlıdestek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'canlıdestek'
};
