import Guitar from "./Guitar";
import { GuitarSpec } from "./GuitarSpec";
import Inventory from "./Inventory";
import { Builder, Type, Wood } from "./types";

export default class FindGuitarTester {
    public result = '';

    constructor() {
        const inventory = new Inventory();
        this.initInventory(inventory);

        const whatErinLikes = new Guitar('', 0);
        whatErinLikes.setSpec(new GuitarSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER, 6));

        const matchingGuitars = inventory.search(whatErinLikes.getSpec());

        if (matchingGuitars.length) {
          this.result = 'Erin, you might like this guitars:\n\n';
          matchingGuitars.forEach((guitar) => {
              this.result +=
                `We have ${guitar.getSpec().getBuilder()} ${guitar.getSpec().getModel()} ${guitar.getSpec().getNumStrings()}-string ${guitar.getSpec().getType()} guitar:
                ${guitar.getSpec().getBackWood()} back and sides.\n ${guitar.getSpec().getTopWood()} top.\nYou can have it for only $${guitar.getPrice()}!\n`;
                this.result += "\n";
          });
        } else {
          this.result = "Sorry, Erin, we have nothing for you.";
        }
    }

    private initInventory(inventory: Inventory) {
        inventory.addGuitar(
            "V95693",
            1499.95,
            new GuitarSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER, 6)
        );
        inventory.addGuitar(
            "V9512",
            1549.95,
            new GuitarSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER, 6)
        );
    }
}
