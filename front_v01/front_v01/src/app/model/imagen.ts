export class Imagen {
    id!:number;
    profile:string;
    backImage:string;
    proyect1Image:string;
    proyect2Image:string;

    constructor( profile:string, backImage:string,proyect1Image:string,proyect2Image:string){
        this.profile = profile;
        this.backImage = backImage;
        this.proyect1Image = proyect1Image;
        this.proyect2Image = proyect2Image;
    }
}
