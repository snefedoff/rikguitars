import { InstrumentSpec } from './InstrumentSpec';

export default class Instrument {
  protected serialNumber: string;
  protected price: number;
  protected spec: InstrumentSpec;

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

  public getSpec(): InstrumentSpec {
    return this.spec;
  }

  public setSpec(newSpec: InstrumentSpec): void {
    this.spec = newSpec;
  }
}
