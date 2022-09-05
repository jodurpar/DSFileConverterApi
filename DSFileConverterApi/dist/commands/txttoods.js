"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxtToOds = void 0;
const XLSX = require("xlsx");
const files_service_1 = require("../services/files.service");
const insertline_1 = require("./insertline");
class TxtToOds {
    static Execute(options) {
        const write_opts = {
            type: "buffer",
            cellDates: false,
            bookSST: false,
            bookType: "ods",
            sheet: options.firstSheetName,
            compression: false,
            Props: {
                Author: options.author,
                Company: options.company
            }
        };
        let textile = files_service_1.FilesService.read(options.inputFile);
        const workbook = XLSX.utils.book_new();
        const ws1b = XLSX.utils.aoa_to_sheet([]);
        for (const element of textile) {
            insertline_1.insertline.insert(element, ws1b, options);
        }
        XLSX.utils.book_append_sheet(workbook, ws1b, options.firstSheetName);
        if (options.headers === false) {
            TxtToOds.deleteRow(ws1b, 0);
        }
        try {
            XLSX.writeFile(workbook, options.outputFile, write_opts);
        }
        finally {
        }
    }
    static ec(r, c) {
        return XLSX.utils.encode_cell({ r: r, c: c });
    }
    static deleteRow(ws, row_index) {
        let variable = XLSX.utils.decode_range(ws["!ref"]);
        for (let R = row_index; R < variable.e.r; ++R) {
            for (let C = variable.s.c; C <= variable.e.c; ++C) {
                ws[TxtToOds.ec(R, C)] = ws[TxtToOds.ec(R + 1, C)];
            }
        }
        variable.e.r--;
        ws['!ref'] = XLSX.utils.encode_range(variable.s, variable.e);
    }
}
exports.TxtToOds = TxtToOds;
//# sourceMappingURL=txttoods.js.map