import { startMsg } from "../messages/startMsg.mjs";
import { getMenu } from "../handlers/menuHandler.mjs";

const startCmd = async (ctx) => {
    try {
        const menu = await getMenu();
        await ctx.reply(startMsg, menu);
    } catch (error) {
        console.error('Error fetching menu:', error);
    }
};

export { startCmd };