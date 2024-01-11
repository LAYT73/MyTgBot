import { Telegraf } from 'telegraf';
import { config } from 'dotenv';
import { startCmd } from './commands/startCmd.mjs';
import { leftHandler, rightHandler } from './handlers/menuHandler.mjs';

config({ path: './config/.env' });
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(startCmd);

bot.action('category1', async (ctx) => {
});

bot.action('category2', async (ctx) => {
});

bot.action('category3', async (ctx) => {
});

bot.action('category4', async (ctx) => {
});

bot.action('left', leftHandler);

bot.action('current_page',);

bot.action('right', rightHandler);

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
