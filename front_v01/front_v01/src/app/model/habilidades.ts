export class Habilidades {
    id!:number;
    technology:string;
    percentage:number;

    constructor(technology:string,percentaje:number){
        this.technology = technology;
        this.percentage =percentaje;
    }

}
