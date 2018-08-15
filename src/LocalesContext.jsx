// @flow
import * as React from 'react';
import { LocaleResolver, NavigatorDetector } from 'locales-detector';
import type Transformer from 'locales-detector/src/transformers/Transformer';
import type Detector from 'locales-detector/src/detectors/Detector';

const LocalesContext = React.createContext([]);

type Props = {
    children: React.Node,
    detectors: Array<Detector>,
    transformers: Array<Transformer>,
}

export const LocalesConsumer = LocalesContext.Consumer;

export class LocalesProvider extends React.Component<Props> {
    static defaultProps = {
        detectors: [new NavigatorDetector()],
        transformers: [],
    };

    render() {
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
