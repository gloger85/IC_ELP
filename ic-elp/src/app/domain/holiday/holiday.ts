export class Holiday {

    id: string;
    date: Date;
    name: string;

    constructor(name: string ,date?: Date ){
        this.date = date;
        this.name = name;
    }
}