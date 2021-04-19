import Guitar from "./Guitar";
import { Builder, Type, Wood } from "./types";

export default class Inventory {
    private guitars: Array<Guitar>;

    constructor() {
        this.guitars = new Array<Guitar>();
    }

    public addGuitar(serialNumber: string, price: number, builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood): void {
        const guitar = new Guitar(serialNumber, price, builder, model, type, backWood, topWood);
        this.guitars.push(guitar);
    }

    public getGuitar(serialNumber: string): Guitar {
        const result = this.guitars.filter( guitar => guitar.getSerialNumber() === serialNumber);
        return result.length ? result[0] : undefined;
    }

    public search(searchGuitar: Guitar): Array<Guitar> {
        const matchingGuitars = new Array<Guitar>();
        for (let guitar of this.guitars) {
            if (guitar.getBuilder() !== searchGuitar.getBuilder()) {
                continue;
            }

            const model = searchGuitar.getModel().toLowerCase();
            if (model !== null && model !== "" && model !== guitar.getModel().toLowerCase()) {
                continue;
            }

            if (searchGuitar.getType() !== guitar.getType()) {
                continue;
            }

            if (searchGuitar.getBackWood() !== guitar.getBackWood()) {
                continue;
            }

            if (searchGuitar.getTopWood() !== guitar.getTopWood()) {
                continue;
            }

            matchingGuitars.push(guitar);
        }
        return matchingGuitars;
    }
}