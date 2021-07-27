const Discord = require("discord.js");
const client = new Discord.Client();
const {JsonDatabase} = require("wio.db");
const db = new JsonDatabase("db");
var kanal = "kanalın id si";
var sahip = "sizin id niz";
client.on("ready",()=>{console.log("Hazırım!");});
setInterval(function(){if(db.get("owodg") != "1"){client.channels.get(kanal).send("owo h");};},16000);
setInterval(function(){if(db.get("owodg") != "1"){client.channels.get(kanal).send("owo battle");};},18000);
setInterval(function(){if(db.get("owodg") != "1"){client.channels.get(kanal).send("owo sell all");};},20000);
setInterval(function(){if(db.get("owodg") != "1"){client.channels.get(kanal).send("owo pray");};},300000);


client.on("message",message=>{ if(message.author.id == sahip){ if(message.content == "!durdur"){db.set("owodg","1"); message.channel.send("Durduruldu");};};});
client.on("message",message=>{ if(message.channel.id==kanal || message.channel.type == "dm"){ if(message.author.id=="408785106942164992"){if(message.content.includes("Beep Boop") || message.content.includes("Please DM me") || message.content.includes("human") || message.content.includes("check")){ db.set("owodg","1"); message.channel.send("Yakalandık, Onaylanınca !çalıştır yaz <@689030915569352727>");};};}; if(message.author.id == sahip){ if(message.content == "!çalıştır"){db.set("owodg","0"); message.channel.send("Açıldı");};};});
client.login("hesap tokeni (bilmiyorsanız benimle iletişime geçin salgvural#3021)");