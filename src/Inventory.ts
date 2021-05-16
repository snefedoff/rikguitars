import Guitar from "./Guitar";
import { GuitarSpec } from "./GuitarSpec";

export default class Inventory {
    private guitars: Array<Guitar>;

    constructor() {
        this.guitars = new Array<Guitar>();
    }

    public addGuitar(serialNumber: string, price: number, spec: GuitarSpec): void {
        const guitar = new Guitar(serialNumber, price);
        guitar.setSpec(spec);
        this.guitars.push(guitar);
    }

    public getGuitar(serialNumber: string): Guitar {
        const result = this.guitars.filter( guitar => guitar.getSerialNumber() === serialNumber);
        return result.length ? result[0] : undefined;
    }

    public search(guitarSpec: GuitarSpec): Array<Guitar> {
        const matchingGuitars = new Array<Guitar>();
        for (let guitar of this.guitars) {
           guitar.getSpec().matches(guitarSpec) && matchingGuitars.push(guitar)
        }
        return matchingGuitars;
    }
}