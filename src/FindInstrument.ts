import { InstrumentSpec } from './InstrumentSpec';
import Inventory from "./Inventory";
import { Builder, InstrumentType, Type, Wood } from "./types";

export default class FindInstrument {
    public result = '';

    constructor() {
        const inventory = new Inventory();
        this.initInventory(inventory);

        const clientSpec: InstrumentSpec = new InstrumentSpec({instrumentType: InstrumentType.GUITAR, builder: Builder.FENDER});

        const matchingInstruments = inventory.search(clientSpec);

        if (matchingInstruments.length) {
            this.result = `You might like these instruments:\n\n`;
            matchingInstruments.forEach((instrument) => {
                const spec = instrument.getSpec().getProps();
                this.result += `We have a ${spec.instrumentType} with following props: \n`;
                const keys = Object.keys(spec);
                keys.forEach( key => { this.result += `${key}: ${spec[key]}\n` });
            });
        } else {
            this.result = "Sorry, Erin, we have nothing for you.";
        }
    }

    private initInventory(inventory: Inventory) {

        inventory.addInstrument("11277", 3999.95, new InstrumentSpec({
                instrumentType: InstrumentType.GUITAR,
                builder: Builder.COLLINGS,
                model: "CJ",
                type: Type.ACOUSTIC,
                numStrings: 6,
                topWood: Wood.INDIAN_ROSEWOOD,
                backWood: Wood.SITKA
            })
        );

        inventory.addInstrument("112784", 5496.95, new InstrumentSpec({
                instrumentType: InstrumentType.GUITAR,
                builder: Builder.MARTIN,
                model: "D-18",
                type: Type.ACOUSTIC,
                numStrings: 6,
                topWood: Wood.MAHOGANY,
                backWood: Wood.ADIRONDACK
            })
        );

        const stratocastor = new InstrumentSpec({
            instrumentType: InstrumentType.GUITAR,
            builder: Builder.FENDER,
            model: "Stratocastor",
            type: Type.ELECTRIC,
            numStrings: 6,
            topWood: Wood.ALDER,
            backWood: Wood.ALDER
        });

        inventory.addInstrument("V93423", 1499.95, stratocastor);
        inventory.addInstrument("V22404", 1599.95, stratocastor);


        inventory.addInstrument("70108276", 2295.95, new InstrumentSpec({
                instrumentType: InstrumentType.GUITAR,
                builder: Builder.GIBSON,
                model: "Les Paul",
                type: Type.ACOUSTIC,
                numStrings: 6,
                topWood: Wood.MAPLE,
                backWood: Wood.MAPLE
            })
        );

        inventory.addInstrument("7012453", 1890.95, new InstrumentSpec({
                instrumentType: InstrumentType.GUITAR,
                builder: Builder.GIBSON,
                model: "SG '61 Reissue",
                type: Type.ACOUSTIC,
                numStrings: 6,
                topWood: Wood.MAHOGANY,
                backWood: Wood.MAHOGANY
            })
        );

        inventory.addInstrument("90183832", 5495.95, new InstrumentSpec({
                instrumentType: InstrumentType.MANDOLIN,
                builder: Builder.COLLINGS,
                model: "F-5G",
                type: Type.ACOUSTIC,
                topWood: Wood.MAPLE,
                backWood: Wood.MAPLE
            })
        );

        inventory.addInstrument("90183832", 5495.95, new InstrumentSpec({
                instrumentType: InstrumentType.BANJO,
                builder: Builder.GIBSON,
                model: "RB-3 Wreath",
                type: Type.ACOUSTIC,
                numStrings: 5,
                backWood: Wood.MAPLE
            })
        );
    }
}
