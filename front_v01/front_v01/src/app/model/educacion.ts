export class Educacion {
    educationId!:number;
    institution:string;
    degree:string;
    entry:string;
    discharge:string;

    constructor(institution:string,degree:string,entry:string,discharge:string){
        this.institution=institution;
        this.degree=degree;
        this.entry=entry;
        this.discharge=discharge;
    }
}
