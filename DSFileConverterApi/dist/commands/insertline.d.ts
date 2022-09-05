import * as XLSX from 'xlsx';
import { ConverterOptions } from '../common/Dtos/converterOptions';
export declare class insertline {
    static insert(line: string, worksheet: XLSX.WorkSheet, options: ConverterOptions): void;
}
