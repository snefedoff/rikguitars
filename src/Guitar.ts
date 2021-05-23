import Instrument from './Instrument';
import { GuitarSpec } from "./GuitarSpec";

export default class Guitar extends Instrument{
  protected spec: GuitarSpec;

  constructor(
    serialNumber: string,
    price: number
  ) {
    super(serialNumber, price);
  }

  public getSpec(): GuitarSpec {
    return this.spec;
  }
}
