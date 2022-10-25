 const telegramBot = require('node-telegram-bot-api');
 require('dotenv').config();
 const TOKEN = "5726128919:AAEkC5UkF9K0uYNieGTa5P8_R4Oj9jybF3k";
 const bot = new telegramBot(TOKEN, { polling: true });
 bot.on('message', (message) => {
     let chat_id = message.from.id;
     bot.sendMessage(chat_id, message.text);
 });