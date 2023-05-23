import { Injectable, Logger } from '@nestjs/common';
import { AMINAH_ID, SANA_ID, SHAHED_ID, TELEGRAM_TOKEN } from './telegram-constant';
const TelegramBot = require('node-telegram-bot-api');


@Injectable()
export class TelegramBotService {
    private readonly bot: any;
    private logger = new Logger(TelegramBotService.name);

    constructor(){
        this.bot = new TelegramBot(TELEGRAM_TOKEN, {polling: true});
        this.bot.on('message', this.onRecieveMessage);
       }

    onRecieveMessage = (msg: any)=>{
        this.logger.debug(msg)
        console.log(msg)
        this.sendMessageToUser(AMINAH_ID, 'homey is coming! 💕')      
        this.sendMessageToUser(AMINAH_ID, msg.chat.id) 
        this.sendMessageToUser(AMINAH_ID, msg.text)    
        this.sendMessageToUser(AMINAH_ID, msg.chat.first_name)   
        this.sendMessageToUser(AMINAH_ID, msg.chat.last_name)      
        this.sendMessageToUser(AMINAH_ID, msg.chat.username)    
     }

    sendMessageToUser = (userId:string, message:string)=>{
        this.bot.sendMessage(userId, message )
    }



}
