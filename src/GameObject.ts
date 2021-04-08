import { Handler } from './Game/handler';
import { objectType } from './Game/types';
import { Vector } from './Vector';
import { Camera } from './Game/Camera';
import { Selector } from './Player/selector';

export class GameObject{
    
    protected position: Vector;
    protected size: Vector;
    protected objecttype: objectType;
    protected color: string;
    public selector: Selector;
    

    public constructor(x: number, y:number, width: number, height: number, objecttype: objectType, color: string){
        this.position = new Vector(x,y);
        this.size = new Vector(width,height);
        this.objecttype = objecttype;
        this.color = color;
    }

    public moveUp(){

    }

    public moveLeft(){

    }

    public moveRight(){

    }

    public moveDown(){
        
    }

    public getColor(): string{
        return this.color;
    }

    public standingOn(handler: Handler){

    }

    public tick(handler?: Handler){

    }

    public keyboardTick(e: KeyboardEvent){

    }

    public render(ctx: CanvasRenderingContext2D, cam?: Camera){

    }

    public getObjectType(): objectType{
        return this.objecttype
    }

    public getPosition(): Vector{
        return this.position;
    }

    public getSize(): Vector{
        return this.size;
    }

    public setPosition(pos: Vector){
        this.position.x = pos.x;
        this.position.y = pos.y;
    }

    public setSize(size: Vector){
        this.size.x = size.x;
        this.size.y = size.y;
    }
}