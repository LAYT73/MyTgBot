import { Markup } from 'telegraf';

const pageFirst = Markup.inlineKeyboard([
    [
        Markup.button.callback('REST API', 'rest'),],[
        Markup.button.callback('Fullstack web-приложение', 'fullstack'),],[
        Markup.button.callback('Frontend', 'frontend'),],[
        Markup.button.callback('Telegram бот', 'tgBot'),],[
        Markup.button.callback('Другое', 'other'),],[
    ]
]);

const pageSecond = Markup.inlineKeyboard([
    [
        Markup.button.callback('Другое', 'category5'),],[
        Markup.button.callback('Category 6', 'category6'),],[
        Markup.button.callback('Category 7', 'category7'),],[
        Markup.button.callback('Category 8', 'category8'),],[
    ],
    [
        Markup.button.callback('⬅️ Left', 'left'),
        Markup.button.callback(`2/2`, 'current_page'),
],])

export { pageFirst, pageSecond };