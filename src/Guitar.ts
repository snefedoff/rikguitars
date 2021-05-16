import { GuitarSpec } from "./GuitarSpec";
import { Builder, Type, Wood } from "./types";

export default class Guitar {
  private serialNumber: string;
  private price: number;
  private spec: GuitarSpec;

  constructor(
    serialNumber: string,
    price: number
  ) {
    this.serialNumber = serialNumber;
    this.price = price;
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

  public setSpec(newSpec: GuitarSpec): void {
    this.spec = newSpec;
  }
}
