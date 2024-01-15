import * as Minecraft from "@minecraft/server";
import * as MinecraftUi from "@minecraft/server-ui";
import { config } from '../config.js';

const importCommand = async (player, commandName) => {
    try {
        const importedCommandModule = await import(`./${commandName}.js`);
        return importedCommandModule.default;
    } catch (error) {
        player.sendMessage(`§cError while fetching ${commandName} command: ${error.message}`);
        return null;
    }
};

const command = {
    name: 'help',
    description: 'Displays the help message.',
    async execute(chat, player, args) {
        if (!args || args.length === 0) {
            let helpMessage = '§aCommands available: \n';

            for (const commandName of config.commands) {
                const importedCommand = await importCommand(player, commandName);
                if (importedCommand) {
                    helpMessage += `§e${config.prefix}${commandName}§r - ${importedCommand.description}\n`;
                }
            }

            player.sendMessage(helpMessage);
        } else {
            const specifiedCommand = args[0].toLowerCase();
            if (config.commands.includes(specifiedCommand)) {
                const importedCommand = await importCommand(player, specifiedCommand);
                if (importedCommand) {
                    player.sendMessage(`§a${config.prefix}${specifiedCommand}§r - ${importedCommand.description}`);
                }
            } else {
                player.sendMessage(`§cInvalid command specified: ${specifiedCommand}`);
            }
        }
    }
}

export default command;