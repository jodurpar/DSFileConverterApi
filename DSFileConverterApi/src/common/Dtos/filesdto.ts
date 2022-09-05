
export class FilesDto implements FilesDto {
    public name: string;
    public dateCreated: Date;
    public dateModified: Date;
}

export interface FilesDto {
    name: string;
    dateCreated: Date;
    dateModified: Date;
}