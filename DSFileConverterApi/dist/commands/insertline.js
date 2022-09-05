"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertline = void 0;
const XLSX = require("xlsx");
class insertline {
    static insert(line, worksheet, options) {
        let columns = line.split(options.delimiter);
        XLSX.utils.sheet_add_aoa(worksheet, [columns], { origin: -1 });
    }
}
exports.insertline = insertline;
//# sourceMappingURL=insertline.js.map