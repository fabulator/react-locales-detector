# React locales detector

[![npm version](https://badge.fury.io/js/react-locales-detector.svg)](https://badge.fury.io/js/react-locales-detector)
[![renovate-app](https://img.shields.io/badge/renovate-app-blue.svg)](https://renovateapp.com/)
[![Known Vulnerabilities](https://snyk.io/test/github/fabulator/react-locales-detector/badge.svg)](https://snyk.io/test/github/fabulator/react-locales-detector)
[![codecov](https://codecov.io/gh/fabulator/react-locales-detector/branch/master/graph/badge.svg)](https://codecov.io/gh/fabulator/react-locales-detector)
[![travis](https://travis-ci.org/fabulator/react-locales-detector.svg?branch=master)](https://travis-ci.org/fabulator/react-locales-detector)

Based on [locales-detector](https://github.com/fabulator/locales-detector) library and react context will provide information about user preferred localization.

## How to use

Install package:

```nodedaemon
npm install react-locales-detector
```

The most basic usage of component load locales from navigator as array of strings.

```javascript
import * as React from 'react';
import { LocalesProvider, LocalesConsumer } from 'react-locales-detector';

class App extends React.Component {
    render() {
            return (
                <LocalesProvider>
                    <LocalesConsumer>
                        {(locales) => {
                            return `User preferred locales are: ${locales.join(', ')}`;
                        }}
                    </LocalesConsumer>
                </LocalesProvider>
            );
        }
}
```

You can define your own detectors or transformers to filter/process output. More about detectors and transformers in [locales-detector](https://github.com/fabulator/locales-detector) library.

```javascript
import * as React from 'react';
import { LocalesProvider, LocalesConsumer } from 'react-locales-detector';
import { LanguageOnlyTransformer, NavigatorDetector } from 'locales-detector';

class App extends React.Component {
    render() {
            return (
                <LocalesProvider
                    transformers={[new LanguageOnlyTransformer()]}
                    detectors={[new NavigatorDetector()]}
                >
                    <LocalesConsumer>
                        {(locales) => {
                            return `User preferred locales are: ${locales.join(', ')}`;
                        }}
                    </LocalesConsumer>
                </LocalesProvider>
            );
        }
}
```
