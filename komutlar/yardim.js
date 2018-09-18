const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Özel mesajlarını kontrol et.", "")
    .setDescription('Komutları özel mesaj yoluyla gönderdim.');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()

  .setColor("RANDOM")
  .setFooter("© Clax Bot 2018")
  .setTitle("Komutlar:")
  .addBlankField(true)
  .addField(" :tada: **Eğlence:**", `c!mc-ödül: Bot rastgele minecraft ödülleri verir. \nc!kedi-adı: Bot rastgele kedi adı söyler. \nc!cool-resim: Bot rastgele cool resimler gösterir. \nc!kedi-resmi: Bot rastgele kedi resimleri gösterir. \nc!köpek-adı: Bot rastgele köpek adı söyler. \nc!köpek-resmi: Bot rastgele köpek resimleri gösterir. \nc!bilezik: Bilezik alırsınız.  \nc!twerk: Popo dansı yaparsınız. \nc!madenci: Madenci olup madene inip altın ararsınız. \nc!söv: Bot etiketlediginiz kişiye çok kötü söver. `)
  .addField(" :busts_in_silhouette: **Kullanıcı:**", `\nc!avatarım: Bot avatarınızı gösterir. \nc!kullanıcı-bilgim: Bot kullanıcı bilgilerinizi gösterir. \nc!hava-durumu: Bot yazdıgınız  veya şehir veya ülkenin anlık hava durumunu gösterir.  \nc!döviz: Bot döviz alış satış fiyatlarını gösterir.  \nc!google: Google ile arama yaparsınız.`)      
  .addField(" :shield: **Sunucu Yetkilisi:**", `\nc!yasakla: Etiketlediginiz kişiyi sunucudan kalıcı olarak yasaklar.\nc!yasak-kaldır: Yasaklamış oldugunuz kişinin yasagını kaldırır. \nc!kilit-koy: Bot istediginiz kanalı kitler. \nc!at: Birini sunucudan atmanıza yarar. \nc!temizle: Bot sohbeti temizler. \nc!sustur: Bir kişiyi sunucuda susturmanıza yarar. \nc!uyar: Bir kişiyi uyarmanıza yarar. \nc!terfi-et: Bir kişinin rütbesini yükseltmenize yarar. \nc!oylama: Bot oylama yapar.\nc!terfi: Birini terfi etmenize yarar.`)
  .addField(" :cd: Müzik", `c!oynat: Şarkı ismi. \nc!geç: Bot çalan şarkıyı geçer. \nc!durdur: Bot çalan şarkıyı durdurur. \nc!devam: Durdulan şarkıyı devam etirir. \nc!ses: Çalan şarkının sesini ayarlarsınız. \nc!kuyruk: Oynatılacak olan şarkıların listesini gösterir. \nc!kapat: Oynatılan şarkıyı kapatır.`)
  .addField(" :telephone_receiver: İletişim", `c!canlıdestek: Burdan destek ekibimizle iletişim kurabilirsiniz.`)
  return message.author.sendEmbed(pingozel)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','y','help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları listeler.',
  usage: 'yardım'
};
