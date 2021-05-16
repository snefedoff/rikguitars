import { Builder, Type, Wood } from "./types";

export class GuitarSpec {
    private type: Type;
    private backWood: Wood;
    private topWood: Wood;
    private builder: Builder;
    private model: string;
    private numStrings: number;
  
    constructor(builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood, numStrings: number) {
      this.builder = builder;
      this.model = model;
      this.type = type;
      this.backWood = backWood;
      this.topWood = topWood;
      this.numStrings = numStrings;
    }
  
    public getModel(): string {
      return this.model;
    }
  
    public getType(): string {
      return this.type;
    }
  
    public getBackWood(): string {
      return this.backWood;
    }
  
    public getTopWood(): string {
      return this.topWood;
    }
  
    public getBuilder(): string {
      return this.builder;
    }
  
    public getNumStrings(): number {
      return this.numStrings;
    }

    public matches(spec: GuitarSpec): boolean {
      return JSON.stringify(this) === JSON.stringify(spec);
    }
  }