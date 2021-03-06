import { GameObject } from '../GameObject';
import { Vector } from '../Vector';
import { Camera } from './Camera';
import { objectType } from './types';

export class Handler{
    objects: Array<GameObject>;
    constructor(){
        this.objects = new Array<GameObject>();
    }


    // all objects tick method as it is required in every game object
    public tick(){
        for(let i: number = 0; i < this.objects.length;i++){
            this.objects[i].tick();
        }
    }

    //renders all gameobjects which aren't players
    public render(ctx: CanvasRenderingContext2D, cam: Camera){
        for(let i: number = 0; i < this.objects.length;i++){
            if(this.objects[i].getObjectType() !== objectType.Player){
                this.objects[i].render(ctx, cam);
            }
        }
        
        //console.log(this.objects.length);
    }

    //renders player
    public renderPlayer(ctx: CanvasRenderingContext2D, cam: Camera){
        for(let i: number = 0; i < this.objects.length;i++){
            if(this.objects[i].getObjectType() == objectType.Player){
                this.objects[i].render(ctx, cam);
                break;
            }
        }
    }

    public getPlayerPos(): Vector{
        for(let i: number = 0; i < this.objects.length;i++){
            if(this.objects[i].getObjectType() == objectType.Player){
                return this.objects[i].getPosition();
            }
        }
    }

    public getPlayerSelectorPos(): Vector{
        for(let i: number = 0; i < this.objects.length;i++){
            if(this.objects[i].getObjectType() == objectType.Player){
                return this.objects[i].selector.holdingTile;
            }
        }
    }

    public standingOn(handler: Handler){
        for(let i: number = 0; i < handler.objects.length;i++){
            handler.objects[i].standingOn(handler);
        }
    }

    public standingOnBlock(): objectType | string{
        let playerSelectorPos: Vector = this.getPlayerSelectorPos();
        for(let i = 0;i < this.objects.length;i++){
            if(this.objects[i].getObjectType() == objectType.Tile && this.objects[i].getPosition().x == playerSelectorPos.x && this.objects[i].getPosition().y == playerSelectorPos.y){
                //found = true;
                //console.log(this.objects[i].getColor());
                return this.objects[i].getColor();

            }
        }   
        return objectType.None;
        // if(!found){
        //     return objectType.None; 
        // }    
    }

    public movePlayerUp(){
        for(let i: number = 0; i < this.objects.length;i++){
            if(this.objects[i].getObjectType() == objectType.Player){
                return this.objects[i].moveUp();
            }
        }
    }

    public movePlayerRight(){
        for(let i: number = 0; i < this.objects.length;i++){
            if(this.objects[i].getObjectType() == objectType.Player){
                return this.objects[i].moveRight();
            }
        }
    }

    public movePlayerLeft(){
        for(let i: number = 0; i < this.objects.length;i++){
            if(this.objects[i].getObjectType() == objectType.Player){
                return this.objects[i].moveLeft();
            }
        }
    }

    public movePlayerDown(){
        for(let i: number = 0; i < this.objects.length;i++){
            if(this.objects[i].getObjectType() == objectType.Player){
                return this.objects[i].moveDown();
            }
        }
    }
}
