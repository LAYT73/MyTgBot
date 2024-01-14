import { Telegraf } from 'telegraf';
import { config } from 'dotenv';
import { startCmd } from './commands/startCmd.mjs';
import { leftHandler, rightHandler } from './handlers/menuHandler.mjs';

config({ path: './config/.env' });
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(startCmd);

bot.action('rest', async (ctx) => {
});

bot.action('fullstack', async (ctx) => {
});

bot.action('frontend', async (ctx) => {
});

bot.action('tgbot', async (ctx) => {
});

bot.action('other', async (ctx) => {
});

bot.action('left', leftHandler);

bot.action('current_page',);

bot.action('right', rightHandler);

bot.launch();