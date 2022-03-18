const fetch = require("node-fetch");
const axios = require("axios");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");

const cors = require("cors");

const app = express();

const token = "1701713804:AAEJ-Rowc2zj6ur8jCCo2OjTQFyzis9ufpg";

const TeleBot = require("telebot");

const bot = new TeleBot({
    token: token,
    polling: true,
});

bot.on("/hello", (msg) => {
    //all the information about user will come with the msg
    console.log(msg);
    bot.sendMessage(
        msg.from.id,
        `Hello ${msg.chat.first_name}, Welcome to Standard Bank, the peoples bank`
    );
});

bot.on("/bye", (msg) => {
    console.log(msg);
    bot.sendMessage(
        msg.from.id,
        `Sad to see you go ${msg.chat.first_name}, remember to use *247# to use our services, have a great day`
    );
});

bot.on("message", (msg) => {
    bot.sendMessage(msg.chat.id, "I am alive!");
});

//start polling
bot.start();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.listen(4000, () => {
    console.log(`Backend server is running!`);
});