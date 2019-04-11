const Discord = require('discord.js')
const client = new Discord.Client()
const axios = require('axios')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
    if (msg.content.startsWith('!card')) {
        var i = msg.content.indexOf(' ');
        var card = msg.content.split(" ");
        var i;
        var req = 'https://api.scryfall.com/cards/names?fuzzy=';
        var cardlength = card.length;

        for (i = 1; i < cardlength; i++) {
            if (i == 1) {
                req += card[i];
            }
            else {
                req += '+' + card[i];
            }
        }
        axios.get(req)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
})

client.on('message', msg => {
    if (msg.content == 'ping') {
        msg.reply('Pong!')
    }
})

client.on('guildMemberAdd', member => {
    member.send(`Welcome to our Server! Remember, DaveMitHut is the overlord here and as his creation, I swear everlasting loyalty to my creator!`)
})

client.login(process.env.LEGION_TOKEN)
