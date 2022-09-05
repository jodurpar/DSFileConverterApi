import { ApiProperty } from "@nestjs/swagger";

export class ConverterOptions implements converterOptions  {
    @ApiProperty({ example:"C:\\FolderName\\FileName", required: true}) 
    public inputFile: string;
    @ApiProperty({ example: "C:\\FolderName\\FileName", required: true }) 
    public outputFile: string;
    @ApiProperty({ example: "txt", required: true }) 
    public inputFileType: string;
    @ApiProperty({ example: "ods", required: true }) 
    public outputFileType: string;
    @ApiProperty({ example: "SheetName", required: false }) 
    public firstSheetName: string;
    @ApiProperty({ example: "|", required: true }) 
    public delimiter: string;
    @ApiProperty({ example: "yes/no", required: false }) 
    public headers: boolean;
    @ApiProperty({ example: "Your name", required: false }) 
    public author: string;
    @ApiProperty({ example: "Your company", required: false }) 
    public company: string;
}

export interface converterOptions {
    inputFile: string,
    outputFile: string,
    inputFileType: string,
    outputFileType: string,
    firstSheetName: string,
    delimiter: string,
    headers: boolean,
    author: string,
    company: string
}