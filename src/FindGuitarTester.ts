import { GuitarSpec } from "./Guitar";
import Inventory from "./Inventory";
import { Builder, Type, Wood } from "./types";

export default class FindGuitarTester {
    public result = '';

    constructor() {
        const inventory = new Inventory();
        this.initInventory(inventory);

        const whatErinLikes = new GuitarSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);

        const matchingGuitars = inventory.search(whatErinLikes);

        if (matchingGuitars.length) {
          matchingGuitars.forEach((guitar) => {
            if (guitar) {
              this.result +=
                `Erin, you might like this ${guitar.getSpec().getBuilder()} ${guitar.getSpec().getModel()} ${guitar.getSpec().getType()} guitar:
                ${guitar.getSpec().getBackWood()} back and sides, ${guitar.getSpec().getTopWood()} top. You can have it for only $${guitar.getPrice()}!`;
                this.result += "\n";
            } else {
              this.result = "Sorry, Erin, we have nothing for you.";
            }
          });
        }
    }

    private initInventory(inventory: Inventory) {
        const fenderStratocastor = new GuitarSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
        inventory.addGuitar("V95693", 1499.95, fenderStratocastor);
        inventory.addGuitar("V9512", 1549.95, fenderStratocastor);
    }
}