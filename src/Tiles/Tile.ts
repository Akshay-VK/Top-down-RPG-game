import { GameObject } from "../GameObject";
import { objectType } from "../Game/types";
import { Camera } from "../Game/Camera";

export class Tile extends GameObject{

    renderLayer: number;
    renderImage: HTMLImageElement;
    renderRegion: Array<Array<number>>;

    constructor(x: number, y: number, width: number, height: number, color: string, renderImage: HTMLImageElement){
        
        super(x,y,width,height,objectType.Tile, color);

        
        this.renderLayer = 1;
        this.objecttype = objectType.Tile;
        this.renderImage = renderImage;
        this.renderRegion = [[0,0],[64,64]];

    }

    public tick(){

    }

    public render(ctx: CanvasRenderingContext2D, cam: Camera){
        if(this.position.x > cam.getPosition().x-50 &&
        this.position.x < cam.getPosition().x+cam.getSize().x &&
        this.position.y > cam.getPosition().y -50 && 
        this.position.y < cam.getPosition().y+cam.getSize().y){
            //ctx.fillStyle = this.color;
            //ctx.fillRect(this.position.x - cam.getPosition().x,this.position.y - cam.getPosition().y,this.size.x,this.size.y);

            if(this.color == 'green'){
                //grass coords
                ctx.drawImage(this.renderImage, 
                    0,
                    0,
                    64,
                    64,
                    this.position.x - cam.getPosition().x,
                    this.position.y - cam.getPosition().y,
                    this.size.x,
                    this.size.y);

        
            }else if(this.color == 'yellow'){
                //sand coords
                ctx.drawImage(this.renderImage, 
                    64,
                    0,
                    64,
                    64,
                    this.position.x - cam.getPosition().x,
                    this.position.y - cam.getPosition().y,
                    this.size.x,
                    this.size.y);
            }else if(this.color == 'blue'){
                //water coords
                ctx.drawImage(this.renderImage, 
                    128,
                    0,
                    64,
                    64,
                    this.position.x - cam.getPosition().x,
                    this.position.y - cam.getPosition().y,
                    this.size.x,
                    this.size.y);
            }


        }
    }

}