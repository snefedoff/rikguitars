import { Builder, InstrumentType, Type, Wood } from "./types";

export type Props = { [key: string]: string | number | Type | Wood | Builder | InstrumentType };

export class InstrumentSpec {
    private readonly props: Props;

    constructor(props: Props) {
      this.props = Object.assign({}, props);
    }

    public getProps(): Props {
        return this.props;
    }

    public matches(spec: InstrumentSpec): boolean {
        const otherSpec = spec.getProps();
        const otherSpecKeys = Object.keys(otherSpec);

        for (let key of otherSpecKeys) {
            if (otherSpec[key] !== this.props[key]) {
                return false;
            }
        }

        return true;
    }
  }
