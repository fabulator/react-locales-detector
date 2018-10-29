// @flow
import * as React from 'react';
import {
    LocaleResolver,
    NavigatorDetector,
    UrlDetector,
    FromListDetector,
    LanguageOnlyTransformer,
    AllowOnlyTransformer,
    DefaultLocaleTransformer,
    FallbacksTransformer,
    IETFTransformer,
    InvalidLocalesTransformer,
} from 'locales-detector';
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

    static DETECTORS = {
        NavigatorDetector,
        UrlDetector,
        FromListDetector,
    };

    static TRANSFORMERS = {
        LanguageOnlyTransformer,
        AllowOnlyTransformer,
        DefaultLocaleTransformer,
        FallbacksTransformer,
        IETFTransformer,
        InvalidLocalesTransformer,
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
