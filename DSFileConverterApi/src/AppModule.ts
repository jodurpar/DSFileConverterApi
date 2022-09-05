import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConverterModule } from './controllers/converter.module';


@Module({
    imports: [ConfigModule.forRoot(), ConverterModule],
})
export class AppModule { }