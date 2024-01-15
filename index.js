import * as Minecraft from "@minecraft/server";
import * as MinecraftUi from "@minecraft/server-ui";
import {
    config
}
from './config.js'

Minecraft.world.beforeEvents.chatSend.subscribe(async(chat) => {
    if (!chat.message.startsWith(config.prefix)) return;
    chat.cancel = true;
    const player = chat.sender;
    const message = chat.message;
    const args = message.slice(config.prefix.length)
        .trim()
        .split(/ +/g);
    const cmd = args.shift()
        .toLowerCase();
    try {
        const {
            default: CommandObject
        } = await import(`./cmds/${cmd}.js`);
        CommandObject.execute(chat, player, args);
    } catch (err) {
        //may cause issues...
        if (err instanceof ReferenceError) {
            player.sendMessage(`§cInvalid Command ${cmd}\nCheck If The Command Actually Exists.`);
        } else {
            console.error(err);
        }
    }
});
