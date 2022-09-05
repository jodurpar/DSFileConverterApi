import { ConverterOptions } from '../common/Dtos/converterOptions';
export declare class FilesService {
    static read(filename: string): Array<string>;
    static readAsJson(filename: string): ConverterOptions;
}
