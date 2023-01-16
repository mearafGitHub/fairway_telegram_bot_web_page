const { Telegraf } = require("telegraf");
const TOKEN =  "5831288377:AAGZs1UuWdc7nXQUZzQtHbS_EyBWpsVsgeo" // "5153026043:AAEOA6Jgze21I8PGuZWKJoNMGY1Wzl6S5OI";
const bot = new Telegraf(TOKEN);

const fairway_bot_link = "https://reliable-squirrel-d78bf6.netlify.app/"; //"https://celebrated-torte-184681.netlify.app/"

console.log("Bot Satrted")
bot.start((ctx) =>
  ctx.reply("Hi, 😊 Welcome to Fairway!", {
    reply_markup: {
      keyboard: [[{ text: "Launch Fairway", web_app: { url: fairway_bot_link } }]],
    },
  })
);

bot.launch();
