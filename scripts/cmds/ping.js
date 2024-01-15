import * as Minecraft from "@minecraft/server";
import * as MinecraftUi from "@minecraft/server-ui";
const command = {
    name: 'ping',
    description: 'Ping Pong',
    execute(chat, player, args) {
        player.sendMessage(`Pong!`);
    }
};

export default command