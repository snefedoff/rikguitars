import { Builder, Type, Wood } from "./types";

export default class Guitar {
  private serialNumber: string;
  private builder: Builder;
  private model: string;
  private type: Type;
  private backWood: Wood;
  private topWood: Wood;
  private price: number;

  constructor(
    serialNumber: string,
    price: number,
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood
  ) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.builder = builder;
    this.model = model;
    this.type = type;
    this.backWood = backWood;
    this.topWood = topWood;
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

  public getBuilder(): string {
    return this.builder;
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
}
