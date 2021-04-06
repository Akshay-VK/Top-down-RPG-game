import { objectType } from './types';
import { Vector } from './Vector';

export class GameObject{
    
    protected position: Vector;
    protected size: Vector;
    protected objecttype: objectType;
    

    public constructor(x: number, y:number, width: number, height: number, objecttype: objectType){
        this.position = new Vector(x,y);
        this.size = new Vector(width,height);
        this.objecttype = objecttype;
    }

    public tick(){

    }

    public keyboardTick(e: KeyboardEvent){
        
    }

    public render(ctx: CanvasRenderingContext2D){

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