import Instrument from './Instrument';
import { InstrumentSpec } from './InstrumentSpec';

export default class Inventory {
    public inventory: Array<Instrument>;

    constructor() {
        this.inventory = new Array<Instrument>();
    }

    public addInstrument(serialNumber: string, price: number, spec: InstrumentSpec): void {
        this.inventory.push(new Instrument(serialNumber, price, spec));
    }

    public getInstrument(serialNumber: string): Instrument {
        const result = this.inventory.filter(guitar => guitar.getSerialNumber() === serialNumber);
        return result.length ? result[0] : undefined;
    }

    public search(instrumentSpec: InstrumentSpec): Array<Instrument> {
        const matchingGuitars = new Array<Instrument>();
        this.inventory.forEach( instrument =>
            instrument.getSpec().matches(instrumentSpec) && matchingGuitars.push(instrument)
        );
        return matchingGuitars;
    }
}
