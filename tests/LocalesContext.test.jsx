// @flow
import * as React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Detector from 'locales-detector/src/detectors/Detector';
import { LocalesConsumer, LocalesProvider } from '../src';

Enzyme.configure({ adapter: new EnzymeAdapter() });

class MockDetector extends Detector {
    getLocales(): Array<string> {
        return ['es'];
    }
}

describe('Test LocalesContext component', () => {
    it('export empty array of default', () => {
        expect(mount(<LocalesConsumer>{locales => <div locales={locales} />}</LocalesConsumer>).find('div').prop('locales')).toEqual([]);
    });

    it('export locales from detector', () => {
        // eslint-disable-next-line function-paren-newline
        expect(mount(
            <LocalesProvider detectors={[new MockDetector()]}>
                <LocalesConsumer>{locales => <div locales={locales} />}</LocalesConsumer>
            </LocalesProvider>).find('div').prop('locales')).toEqual(['es']);
    });
});
