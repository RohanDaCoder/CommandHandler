# Minecraft Bedrock Command Handler

Welcome to the beginner-friendly Minecraft Bedrock Addon Command Handler! This tool simplifies command creation for new addon developers.

## Getting Started

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

### How to create a Command?
Follow These Steps.

1. Open `config.js`.
2. Add your command name to the `commands` array.
3. Create a file inside `cmds/` with your command name (e.g., `cmds/ping.js`).
4. Follow this pattern:

```javascript
const command = {
    name: 'ping', // Command name here
    description: 'Ping Pong', // Description here
    execute(chat, player, args) {
        // Command code here
        player.sendMessage(`Pong!`);
    }
};
export default command;
```

### Help Command

There's an inbuilt help command.

Note: **Do not modify `help.js` as it will work out of the box.**
- Download or copy `help.js` from the repository.

## Usage

- To view available commands: `.help`
- To get help for a specific command: `.help <command>`

## Template

Download the template from the repository's release tab as a zip file.

## Thanks for Using!

If you encounter issues or need assistance, feel free to contact me.

- Discord: `rohan_ohio`
- MCPE: `RohanPlayz1080`

Happy coding!
