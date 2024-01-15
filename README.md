# Minecraft Bedrock Command Handler

Welcome to the beginner-friendly Minecraft Bedrock Addon Command Handler! This tool simplifies command creation for new addon developers.

## Getting Started
- Obviously get the files at first...
### Configuration

- Easily change the command prefix in `config.js`.
- To enable or disable commands, just add or remove the command's name in `config.js`.

**config.js:**
```javascript
export const config = {
    prefix: ".",
    commands: ['ping', 'help' /* command names here */]
};
```

### How To Create a Command?
![Ping Command](https://cdn.discordapp.com/attachments/1006913737250328627/1196441045408436305/Screenshot_2024_0115_190747_com.mojang.minecraftpe.png?ex=65b7a38e&is=65a52e8e&hm=9bf373ed7bd1060a0f7859f9a9051f83b918b5c8e9cf4b3c4ad18b598d4f41e0&)

Follow These Steps.

1. Open `config.js`.
2. Add your command name to the `commands` array. 
3. Create a file inside `cmds/` with your command name (e.g., `cmds/ping.js`).
4. Use This Boilerplate for building a new command:

```javascript
import { config } from '../config.js'
const command = {
    name: 'ping', // Command name here
    description: 'Ping Pong', // Description here
    usage: `${config.prefix}ping`
    execute(chat, player, args) {
        // Command code here
        player.sendMessage(`Pong!`);
    }
};
export default command;
```

### Help Command
![Help Command](https://cdn.discordapp.com/attachments/1006913737250328627/1196441045068681236/Screenshot_2024_0115_190633_com.mojang.minecraftpe.png?ex=65b7a38d&is=65a52e8d&hm=cc1e9d7b0javascript6a1eb67d4928ee4537a0beaa69a8d671dca234e0f5b17&)
Want To Know The best part? It comes with a handy help command no need to create one.
- To view available commands: `.help`
- To get help for a specific command: `.help <command>`

## Download

Download the template from [here](https://github.com/RohanDaCoder/CommandHandler/releases/download/Handler/CommandHandler.zip)

## Thanks for Using!

If you encounter issues or need assistance, feel free to contact me.

- Discord: `rohan_ohio`
- MCPE: `RohanPlayz1080`

Happy coding!
