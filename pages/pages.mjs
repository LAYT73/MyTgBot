import { Markup } from 'telegraf';

const pageFirst = Markup.inlineKeyboard([
    [
        Markup.button.callback('Category 1', 'category1'),],[
        Markup.button.callback('Category 2', 'category2'),],[
        Markup.button.callback('Category 3', 'category3'),],[
        Markup.button.callback('Category 4', 'category4'),],[
    ],
    [
        Markup.button.callback(`1/2`, 'current_page'),
        Markup.button.callback('➡️ Right', 'right'),
    ],
]);

const pageSecond = Markup.inlineKeyboard([
    [
        Markup.button.callback('Category 5', 'category5'),],[
        Markup.button.callback('Category 6', 'category6'),],[
        Markup.button.callback('Category 7', 'category7'),],[
        Markup.button.callback('Category 8', 'category8'),],[
    ],
    [
        Markup.button.callback('⬅️ Left', 'left'),
        Markup.button.callback(`2/2`, 'current_page'),
],])

export { pageFirst, pageSecond };