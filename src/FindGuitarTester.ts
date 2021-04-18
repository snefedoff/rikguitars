import Guitar from "./Guitar";
import Inventory from "./Inventory";

export default class FindGuitarTester {
    constructor() {
        const inventory = new Inventory();
        this.initInventory(inventory);

        const whatErinLikes = new Guitar("", 0, "fender", "Stratocastor", "electric", "Alder", "Alder");

        const guitar = inventory.search(whatErinLikes);

        if (guitar) {
            console.log(`Erin, you might like this ${guitar.getBuilder()} ${guitar.getModel()} ${guitar.getType()} guitar:`);
            console.log(`${guitar.getBackWood()} back and sides, guitar.getTopWood() + " top. You can have it for only $ ${guitar.getPrice()}!`);
        }
        else {
            console.log('Sorry, Erin, we have nothing for you.');
        }
    }

    private initInventory(inventory: Inventory) {
        inventory.addGuitar("", 0, "fender", "Stratocastor", "electric", "Alder", "Alder")
    }
}