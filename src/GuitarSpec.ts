import { InstrumentSpec } from './InstrumentSpec';
import { Builder, Type, Wood } from "./types";

export class GuitarSpec extends InstrumentSpec{
    protected numStrings: number;

    constructor(builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood, numStrings: number) {
      super(builder, model, type, backWood, topWood);
      this.numStrings = numStrings;
    }

    public getNumStrings(): number {
      return this.numStrings;
    }

    public matches(spec: GuitarSpec): boolean {
        return JSON.stringify(this) === JSON.stringify(spec);
    }
  }
