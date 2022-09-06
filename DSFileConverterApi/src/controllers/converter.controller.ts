import { Controller, Post, Body, Param, Query, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ApiBearerAuth, ApiResponse, ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger';
import { Command } from '../commands/commands';
import { ConverterOptions } from '../common/Dtos/converterOptions';


@ApiBearerAuth()
@ApiTags('Converter')
@Controller('Converter')
export class ConverterController {
    @Post()
    @ApiOperation({ summary: 'Convert txt file to ods format' })
    @ApiResponse({ status: 201, description: 'File created.'})
    @ApiResponse({ status: 409, description: 'Do not have permisions to write file.' })
    @ApiBody({ type: ConverterOptions  })
    async Converter(
        @Body() option: ConverterOptions,
        @Res({ passthrough: true }) res: Response    ) {
        try {
            Command.Execute(option);
            res.status(HttpStatus.CREATED).send(`File created ${option.outputFile}`);
            return `File created ${option.outputFile} `
        } catch (error) {
            res.status(HttpStatus.CONFLICT).send(error.message);
            return error;
        }
    }
}