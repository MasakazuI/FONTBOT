console.log("beep beep beep");

require("dotenv").config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.login(process.env.TOKEN);

client.on('ready', onSuccessfulLogin);

function onSuccessfulLogin()
{
    console.log('Client successfully logged in');
}

client.on('message', gotMessage);

function gotMessage(msg)
{
    console.log(msg);

    if (msg.channelId !== '947001448972030002')
    {
        return;
    }

    if (msg.type === 'GUILD_MEMBER_JOIN')
    {
        return;
    }

    if (msg.type === 'GUILD_MEMBER_LEAVE')
    {
        return;
    }

    if (msg.type === 'REPLY' && msg.content === '' && msg?.stickers)
    {
        return;
    }

    if (msg.author.username === 'FONT BOT')
    {
        return;
    }
    msg.delete(1000);
}

client.on('guildMemberRemove', userLeft);

  function userLeft(member)
  {
    const channel = client.channels.cache.get('947001448972030002');
    channel.send(member.user.username + ' has left the server');
  }