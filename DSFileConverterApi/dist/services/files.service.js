"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const fs = require("fs");
class FilesService {
    static read(filename) {
        try {
            return fs.readFileSync(filename).toString().split('\r\n');
        }
        finally {
        }
    }
    static readAsJson(filename) {
        try {
            return JSON.parse(fs.readFileSync(filename).toString());
        }
        finally {
        }
    }
}
exports.FilesService = FilesService;
//# sourceMappingURL=files.service.js.map