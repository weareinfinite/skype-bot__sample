var builder = require('botbuilder');
var express = require('express');
require('dotenv').config()
// Create server

const server = express();


server.listen(3000, () => {
    console.log('Bot Server listening on port 3000')
})

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

server.post('/api/messages', connector.listen());   


var bot = new builder.UniversalBot(connector, function (session) {

    session.send("You said: %s", session.message.text);
});
