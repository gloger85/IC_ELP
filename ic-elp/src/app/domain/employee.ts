export class Employee {
    id: number;
    personalId: number;
    email: string;
    name: string;
    surname: string;
    position: string;

    constructor(id: number,
                personalId: number,
                email: string,
                name: string,
                surname: string,
                position: string) {

                    this.id = id;
                    this.personalId = personalId;
                    this.email = email;
                    this.name = name;
                    this.surname = surname;
                    this.position = position;
    }
}