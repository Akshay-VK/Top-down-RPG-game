import { Camera } from '../Game/Camera';
import { Handler } from '../Game/handler';
import { objectType } from '../Game/types';
import { PerlinNoise } from '../PerlinNoise';
import { Tile } from '../Tiles/Tile';

export class TerrainGenerator{
    perlin: PerlinNoise;
    ZVal: number;
    renderImage: HTMLImageElement;
    constructor(renderImage: HTMLImageElement){
        this.perlin = new PerlinNoise();
        this.ZVal = Math.random()*Math.random();
        this.renderImage= renderImage;
    }

    public generateTerrain(camera: Camera, handler: Handler){
        for(let i = camera.getPosition().x; i < camera.getPosition().x+camera.getSize().x;i += 50){
            for(let j = camera.getPosition().y; j < camera.getPosition().y+camera.getSize().y;j += 50){
                let perlinValue: number = this.perlin.noise(i/500, j/500, this.ZVal, 0, 1);
                let tileType: string = this.getTileType(perlinValue, 0, 1);
                handler.objects.push(new Tile(i, j, 50,50,tileType,this.renderImage));
            }
            
        }
    }

    public emptyTerrain(handler: Handler){
        for(var i = 0; i < handler.objects.length;i++){
            if(handler.objects[i].getObjectType() == objectType.Tile){
                handler.objects.splice(i,1);
            }
        }
    }

    public getTileType(value: number, min: number, max:number): string {
        let percent: number = (value/(max-min))*100;
        if(percent < 30){
            return 'blue';//water
        }else if(percent < 35){
            return 'yellow';//sand
        }else if(percent < 80){
            return 'green';//grass
        }
        else{
            return 'brown';//dirt
        }
    }
}