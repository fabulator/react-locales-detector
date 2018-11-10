import * as React from 'react';
import {
    LocaleResolver,
    DETECTORS,
    TRANSFORMERS,
} from 'locales-detector';

const LocalesContext = React.createContext<Array<string>>([]);

type Props = {
    children: React.ReactNode,
    detectors: Array<DETECTORS.Detector>,
    transformers: Array<TRANSFORMERS.Transformer>,
};

export const LocalesConsumer = LocalesContext.Consumer;

export class LocalesProvider extends React.Component<Props> {
    public static defaultProps = {
        detectors: [new DETECTORS.NavigatorDetector()],
        transformers: [],
    };

    public render() {
        const resolver = new LocaleResolver(this.props.detectors, this.props.transformers);

        return (
            <LocalesContext.Provider
                value={resolver.getLocales()}
            >
                {this.props.children}
            </LocalesContext.Provider>
        );
    }
}
