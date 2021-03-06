import { Camera } from "../Game/Camera";
import { Handler } from "../Game/handler";
import { objectType } from "../Game/types";
import { PerlinNoise } from "../PerlinNoise";
import { Tree } from "../Tiles/Tree";
import { TerrainGenerator } from "./terrainGenerator";

export class TreeGenerator{
    perlin: PerlinNoise;
    zValue: number;
    terrainGeneratorReference: TerrainGenerator;
    renderImage: HTMLImageElement;
    constructor(terrainGenerator: TerrainGenerator, renderImage: HTMLImageElement){
        this.perlin = new PerlinNoise();
        this.zValue = Math.random()*Math.random();
        this.terrainGeneratorReference = terrainGenerator;
        this.renderImage = renderImage;
    }

    public generateTrees(camera: Camera, handler: Handler){
        for(let i = camera.getPosition().x; i < camera.getPosition().x+camera.getSize().x;i += 50){
            for(let j = camera.getPosition().y; j < camera.getPosition().y+camera.getSize().y;j += 50){

                //getting perlin value
                let perlinValue: number = this.perlin.noise(i/500, j/500, this.zValue, 0, 1);

                //get perlin value for same spot from terrain generator
                let terrainPerlinValue: number = this.perlin.noise(i/500, j/500, this.terrainGeneratorReference.ZVal, 0, 1);

                let tileType: string = this.terrainGeneratorReference.getTileType(terrainPerlinValue, 0, 1);


                //compare if the tree value is on  grass
                //generate tree
                //or dont
                
                if(tileType == 'green' && perlinValue*100 < 30){
                    handler.objects.push(new Tree(i, j, 50,50,this.renderImage));
                    //console.log('tree generated');
                }

            }
            
        }
    }

    public emptyTrees(handler: Handler){
        for(var i = 0; i < handler.objects.length;i++){
            if(handler.objects[i].getObjectType() == objectType.Tile){
                handler.objects.splice(i,1);
            }
        }
    }
}
