import * as React from 'react';
import { mount } from 'enzyme';
import { LocalesConsumer, LocalesProvider } from '../src';

class MockDetector {
    public getLocales(): Array<string> {
        return ['es'];
    }
}

describe('Test LocalesContext component', () => {
    it('export empty array of default', () => {
        expect(mount(<LocalesConsumer>{locales => <div data-locales={locales} />}</LocalesConsumer>).find('div').prop('data-locales'))
            .toEqual([]);
    });

    it('export locales from detector', () => {
        // eslint-disable-next-line function-paren-newline
        expect(mount(
            <LocalesProvider detectors={[new MockDetector()]}>
                <LocalesConsumer>{locales => <div data-locales={locales} />}</LocalesConsumer>
            </LocalesProvider>,
        ).find('div').prop('data-locales')).toEqual(['es']);
    });
});
