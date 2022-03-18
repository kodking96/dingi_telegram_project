import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan'
import helmet from 'helmet'

import config from './config/defaults'

import cors from 'cors';

import routes from './routes'
import dbConnect from './db'

import session from 'express-session'
import cookieSession from 'cookie-session';

import TeleBot from 'telebot';

const token = "1701713804:AAEJ-Rowc2zj6ur8jCCo2OjTQFyzis9ufpg";

const bot = new TeleBot({
    token: token,
});

//import { initialize, session } from 'passport';

const port = config.portNumber as number;
const host = config.host as string;

console.log(port);

const app = express();

app.use(cors());
app.use(cookieSession(
    {name: "DIngiApp", keys: ["key1",  "key2"]}
));

app.use(express.static(process.cwd()+"/dinglogin/dist/dingilogin/"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(helmet());
app.use(morgan("common"));

// app.use(initialize())
// app.use(session())

app.listen(port, () => {
    console.log(`Server listening at http://${host}:${port}`)
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

bot.start();
   // dbConnect();
    routes(app);
})