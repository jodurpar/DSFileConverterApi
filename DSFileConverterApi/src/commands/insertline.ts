import * as XLSX from 'xlsx';
import { ConverterOptions } from '../common/Dtos/converterOptions';

export class insertline {
    public static insert(line: string, worksheet: XLSX.WorkSheet, options : ConverterOptions): void {
        let columns = line.split(options.delimiter);
        XLSX.utils.sheet_add_aoa(worksheet, [columns], { origin: -1 });
    }
}