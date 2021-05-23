import { InstrumentSpec } from './InstrumentSpec';
import { Builder, Style, Type, Wood } from './types';

export default class MandolinSpec extends InstrumentSpec{
    protected style: Style;

    constructor(builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood, style: Style) {
        super(builder, model, type, backWood, topWood);
        this.style = style;
    }

    public getStyle(): Style {
        return this.style;
    }

    public matches(spec: MandolinSpec): boolean {
        return JSON.stringify(this) === JSON.stringify(spec);
    }
}
