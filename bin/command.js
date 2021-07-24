const COMMAND_DATA = require('./../data/commands.json')

function commandHelper() {
    console.table(
      COMMAND_DATA.commands.map(command => {
          return {
            "Short Command": command.shortCommand,
            "Alias": command.alias,
            Description: command.description,
            "How to use?": command.example
          };
        })
      );
};

module.exports = {
  commandHelper: commandHelper
};