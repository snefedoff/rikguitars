import Guitar from "./Guitar";
import Inventory from "./Inventory";
import { Builder, Type, Wood } from "./types";

export default class FindGuitarTester {
    constructor() {
        const inventory = new Inventory();
        this.initInventory(inventory);

        const whatErinLikes = new Guitar("", 0, Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);

        const matchingGuitars = inventory.search(whatErinLikes);

        if (matchingGuitars.length) {
          matchingGuitars.forEach((guitar) => {
            if (guitar) {
              console.log(
                `Erin, you might like this ${guitar.getBuilder()} ${guitar.getModel()} ${guitar.getType()} guitar:
                ${guitar.getBackWood()} back and sides, ${guitar.getTopWood()} top. You can have it for only $${guitar.getPrice()}!`
              );
            } else {
              console.log("Sorry, Erin, we have nothing for you.");
            }
          });
        }
    }

    private initInventory(inventory: Inventory) {
        inventory.addGuitar("V95693", 1499.95, Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
        inventory.addGuitar("V9512", 1549.95, Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER)
    }
}