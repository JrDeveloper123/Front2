export class Proyecto {
     proyectid!:number;
	 name:string;
	 detail:string;
     urlImage:string;
     urlProyect:string;
         
    constructor( name:string, detail:string,urlImage:string,urlProyect:string){
        
        this.name = name;
        this.detail = detail;
        this.urlImage = urlImage;
        this.urlProyect = urlProyect;
    }
}
