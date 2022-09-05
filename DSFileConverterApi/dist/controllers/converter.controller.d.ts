import { Response } from 'express';
import { ConverterOptions } from '../common/Dtos/converterOptions';
export declare class ConverterController {
    Converter(option: ConverterOptions, res: Response): Promise<any>;
}
