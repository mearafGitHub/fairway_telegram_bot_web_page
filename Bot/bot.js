const { Telegraf } = require("telegraf");
const TOKEN =  "5831288377:AAGZs1UuWdc7nXQUZzQtHbS_EyBWpsVsgeo"; // "5153026043:AAEOA6Jgze21I8PGuZWKJoNMGY1Wzl6S5OI"
const bot = new Telegraf(TOKEN);

const fairway_bot_link = "http://localhost:3000/"; // "https://quiet-beijinho-483168.netlify.app/"; 
console.log("Bot Satrted")
bot.start((ctx) =>
  ctx.reply("Hi, 😊 Welcome to Fairway!", {
    reply_markup: {
      keyboard: [[{ text: "Fairway Menu", web_app: { url: fairway_bot_link } }]],
    },
  })
);

bot.launch();
