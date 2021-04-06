import { GameObject } from "../GameObject";
import { objectType } from "../types";

export class Tile extends GameObject{
    constructor(x: number, y: number, width: number, height: number){
        
        super(x,y,width,height,objectType.Tile);

        

        this.objecttype = objectType.Tile;
    }

    public tick(){

    }

    public render(ctx: CanvasRenderingContext2D){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.position.x,this.position.y,this.size.x,this.size.y);
    }

}