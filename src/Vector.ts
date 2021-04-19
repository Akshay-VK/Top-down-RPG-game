export class Vector{
    public x: number;
    public y: number;

    public constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    public add(vec: Vector){
	 return new Vector(this.x+vec.x,this.y+vec.y);
    }
}
