import { startMsg } from '../messages/startMsg.mjs';
import { pageFirst, pageSecond } from '../pages/pages.mjs';

let currentPage = 1

const updateInlineMenu = (currentPage) => {
    return currentPage === 1 ? pageFirst : pageSecond;
};

const leftHandler = async (ctx) => {
    currentPage = 1;
    await ctx.editMessageText(startMsg, { ...updateInlineMenu(currentPage) });
};

const rightHandler = async (ctx) => {
    currentPage = 2;
    await ctx.editMessageText(startMsg, { ...updateInlineMenu(currentPage) });
};

const getMenu = async () => {
    return { ...updateInlineMenu(currentPage) };
}

export {leftHandler, rightHandler, getMenu};