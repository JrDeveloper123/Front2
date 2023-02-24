

export class Persona {
    personId?: number;
    name:string;
    surname:string;      
	mail:string; 
    about:string;    
    degree:string;
    address:string;
    phone:string;

    constructor(name:string, surname:string, mail:string,about:string, degree:string, address:string, phone:string){
        this.name = name;
        this.surname = surname;
        this.mail = mail;
        this.about = about;
        this.degree = degree;
        this.address = address;
        this.phone = phone;
    }

}