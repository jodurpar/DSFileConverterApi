import { Module } from '@nestjs/common';
import { ConverterController } from './converter.controller';


@Module({
    controllers: [ConverterController],
    providers: [],
})
export class ConverterModule { }