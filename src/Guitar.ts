import { Builder, Type, Wood } from "./types";

export class GuitarSpec {
  private type: Type;
  private backWood: Wood;
  private topWood: Wood;
  private builder: Builder;
  private model: string;

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

export default class Guitar {
  private serialNumber: string;
  private price: number;
  private spec: GuitarSpec;

  constructor(
    serialNumber: string,
    price: number,
    spec: GuitarSpec
  ) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.spec = spec;
  }

  public getSerialNumber(): string {
    return this.serialNumber;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(newPrice: number): void {
    this.price = newPrice;
  }

  public getSpec(): GuitarSpec {
    return this.spec;
  }
}
