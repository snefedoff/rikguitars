import MandolinSpec from './MandolinSpec';
import Instrument from './Instrument';

export default class Mandolin extends Instrument{
    protected spec: MandolinSpec;

    public getSpec(): MandolinSpec {
        return this.spec;
    }
}
