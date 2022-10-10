const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});



const fs = require("fs");
const Discord = require ("discord.js")
const moment = require ("moment")
const POLAT = new Discord.Client();
const prefix = "+";


POLAT.login("MTAyNzEyOTAwMTEwMzMzOTU3MA.GptkB_.VZ9kBKNPW-l");
POLAT.on("ready", async () => {
  console.log(`Logged in as ${POLAT.user.username}!`);
  POLAT.user.setStatus("ONLINE");
  POLAT.user.setActivity(`+help`, { type: "WATCHING" });
  POLAT.guilds.cache.forEach(g => {
    if (g.member(POLAT.user).hasPermission("ADMINISTRATOR")) {
      g.fetchInvites().then(guildInvites => {});
    }
  });
});

//////////





POLAT.on("message", message => {
  if (message.content === prefix + "about") {
    const embed = new Discord.MessageEmbed()
    .setDescription(`                         
**[ invite ]**
**[ click here ]()** 
**[ support ]**
**[ click here ]()**`)
      .setColor("BLACK")
    
      .addField("`my name`", `** ${POLAT.user.tag} **`, true)

      .addField("`Server`", `**${POLAT.guilds.cache.size} Server**`, true)
    
     .addField("`Usres`",  `**${POLAT.users.cache.size}  Users**`, true)
    
    
     .addField( "`developer bot` ",`<@951495275590066226>`,true)


      .setImage(""
      );
    
    message.channel.send(embed);
    message.react("");
  }
});



POLAT.on("message", message => {
  if (message.content === prefix + "invite") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("=--> click touch for link bot<--=")
      .setURL(
        ""
      );
    message.channel.send(embed);
     message.react("");
  }
});

///////




////// code invite vr 12 by POLAT BOT///////
const invites = {};
const wait = require("util").promisify(setTimeout);
POLAT.on("ready", () => {
  wait(1000);
  POLAT.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  }); 
});
///////////////////
POLAT.on("guildMemberAdd", member => {
  member.guild.fetchInvites().then(guildInvites => {
    const gamer = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
    const inviter = POLAT.users.cache.get(invite.inviter.id);
    const channel = member.guild.channels.cache.find(
      channel => channel.name === "invites" 
    );
    channel.send(
      `__**<@${member.id}> **|invite kra la layan** | <@${inviter.id}> | **Zhmaray henan** |${invite.uses}**__`
    );
  });
});
