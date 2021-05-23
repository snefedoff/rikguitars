import Instrument from './Instrument';
import { InstrumentSpec } from './InstrumentSpec';
import Mandolin from './Mandolin';
import MandolinSpec from './MandolinSpec';
import Guitar from "./Guitar";
import { GuitarSpec } from "./GuitarSpec";

export default class Inventory {
    public inventory: Array<Instrument>;

    constructor() {
        this.inventory = new Array<Instrument>();
    }

    public addInstrument(serialNumber: string, price: number, spec: InstrumentSpec): void {
        let instrument: Instrument = null;
        if (spec instanceof GuitarSpec) {
            instrument = new Guitar(serialNumber, price);
            instrument.setSpec(spec);
        }
        if (spec instanceof MandolinSpec) {
            instrument = new Mandolin(serialNumber, price);
            instrument.setSpec(spec);
        }
        instrument && this.inventory.push(instrument);
    }

    // public getInstrument(serialNumber: string): Guitar {
    //     const result = this.inventory.filter( guitar => guitar.getSerialNumber() === serialNumber);
    //     return result.length ? result[0] : undefined;
    // }

    public search(instrumentSpec: InstrumentSpec): Array<Instrument> {
        if (instrumentSpec instanceof GuitarSpec) {
            const matchingGuitars = new Array<Guitar>();
            for (let instrument of this.inventory) {
                const guitar = <Guitar>instrument;
                guitar.getSpec().matches(instrumentSpec) && matchingGuitars.push(guitar)
            }
            return matchingGuitars;
        }

        if (instrumentSpec instanceof MandolinSpec) {
            const matchingMandolin = new Array<Mandolin>();
            for (let instrument of this.inventory) {
                const guitar = <Mandolin>instrument;
                guitar.getSpec().matches(instrumentSpec) && matchingMandolin.push(guitar)
            }
            return matchingMandolin;
        }

        return [];
    }
}
