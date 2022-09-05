"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const txttoods_1 = require("./txttoods");
class Command {
    static Execute(options) {
        try {
            let commandName = `${options.inputFileType}to${options.outputFileType}`;
            if (this.commands[commandName] !== undefined) {
                this.commands[commandName](options);
                console.log(`File ${options.outputFileType} created!`);
            }
            else {
                console.log(`Can't convert ${options.inputFileType} to ${options.outputFileType} (missing function: ${commandName})`);
            }
        }
        finally {
        }
    }
}
exports.Command = Command;
Command.commands = {
    txttoods: txttoods_1.TxtToOds.Execute,
};
//# sourceMappingURL=commands.js.map