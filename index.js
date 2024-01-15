import { Telegraf } from 'telegraf';
import { config } from 'dotenv';
import { startCmd } from './commands/startCmd.mjs';
import { leftHandler, rightHandler } from './handlers/menuHandler.mjs';
import {frontendHandler, fullstackHandler, otherHandler, restHandler, tgBotHandler} from "./handlers/actionHandler.mjs";

config({ path: './config/.env' });
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(startCmd);

bot.action('rest', restHandler);

bot.action('fullstack', fullstackHandler);

bot.action('frontend', frontendHandler);

bot.action('tgBot', tgBotHandler);

bot.action('other', otherHandler);

bot.action('left', leftHandler);

bot.action('current_page');

bot.action('right', rightHandler);

bot.launch().then();