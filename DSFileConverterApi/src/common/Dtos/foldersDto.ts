
export class Folders implements FoldersDto {
    public name: string;
    public dateCreated: Date;
    public dateModified: Date;
}

export interface FoldersDto {
    name: string;
    dateCreated: Date;
    dateModified: Date;
}