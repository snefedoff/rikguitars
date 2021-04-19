import Guitar, { GuitarSpec } from "./Guitar";

export default class Inventory {
    private guitars: Array<Guitar>;

    constructor() {
        this.guitars = new Array<Guitar>();
    }

    public addGuitar(serialNumber: string, price: number, spec: GuitarSpec): void {
        const guitar = new Guitar(serialNumber, price, spec);
        this.guitars.push(guitar);
    }

    public getGuitar(serialNumber: string): Guitar {
        const result = this.guitars.filter( guitar => guitar.getSerialNumber() === serialNumber);
        return result.length ? result[0] : undefined;
    }

    public search(guitarSpec: GuitarSpec): Array<Guitar> {
        const matchingGuitars = new Array<Guitar>();
        for (let guitar of this.guitars) {
            if (guitar.getSpec().getBuilder() !== guitarSpec.getBuilder()) {
                continue;
            }

            const model = guitarSpec.getModel().toLowerCase();
            if (model !== null && model !== "" && model !== guitar.getSpec().getModel().toLowerCase()) {
                continue;
            }

            if (guitarSpec.getType() !== guitar.getSpec().getType()) {
                continue;
            }

            if (guitarSpec.getBackWood() !== guitar.getSpec().getBackWood()) {
                continue;
            }

            if (guitarSpec.getTopWood() !== guitar.getSpec().getTopWood()) {
                continue;
            }

            matchingGuitars.push(guitar);
        }
        return matchingGuitars;
    }
}