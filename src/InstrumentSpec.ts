import { Builder, Type, Wood } from "./types";

export class InstrumentSpec {
    protected type: Type;
    protected backWood: Wood;
    protected topWood: Wood;
    protected builder: Builder;
    protected model: string;

    constructor(builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood) {
      this.builder = builder;
      this.model = model;
      this.type = type;
      this.backWood = backWood;
      this.topWood = topWood;
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
  }
