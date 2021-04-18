import Guitar from "./Guitar";

export default class Inventory {
    private guitars: Array<Guitar>;

    constructor() {
        this.guitars = new Array<Guitar>();
    }

    public addGuitar(serialNumber: string, price: number, builder: string, model: string, type: string, backWood: string, topWood: string): void {
        const guitar = new Guitar(serialNumber, price, builder, model, type, backWood, topWood);
        this.guitars.push(guitar);
    }

    public getGuitar(serialNumber: string): Guitar {
        const result = this.guitars.filter( guitar => guitar.getSerialNumber() === serialNumber);
        return result.length ? result[0] : undefined;
    }

    public search(searchGuitar: Guitar): Guitar {
        for (let guitar of this.guitars) {
        }
        return null;
    }
}