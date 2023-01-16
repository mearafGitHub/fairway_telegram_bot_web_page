const { Telegraf } = require("telegraf");
const TOKEN =  "5831288377:AAGZs1UuWdc7nXQUZzQtHbS_EyBWpsVsgeo" // "5153026043:AAEOA6Jgze21I8PGuZWKJoNMGY1Wzl6S5OI";
const bot = new Telegraf(TOKEN);

const web_link = "https://reliable-squirrel-d78bf6.netlify.app/"; //"https://celebrated-torte-184681.netlify.app/"

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
