const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES] }); 

client.on('ready', () => {
  var testChannel = client.channels.cache.find(channel => channel.id === 'ID_CHANNEL');

  console.log('I am connected !');

  setInterval(() => {
    testChannel.send('YOUR_MESSAGE');
  }, 5000);
});

client.login('TOKEN_BOT')