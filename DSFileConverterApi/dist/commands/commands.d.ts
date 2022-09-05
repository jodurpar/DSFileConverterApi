import { ConverterOptions } from '../common/Dtos/converterOptions';
export declare class Command {
    static commands: {
        [K: string]: Function;
    };
    static Execute(options: ConverterOptions): void;
}
