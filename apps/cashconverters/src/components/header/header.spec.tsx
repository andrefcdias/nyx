import { h } from 'preact';
import Header from './';
import { render } from '@testing-library/preact';

describe('Initial Test of the Header', () => {
    test('Header renders 3 nav items', () => {
        const container = render(<Header />);

        expect(container.getByText('Preact App')).not.toBeNull();
    });
});
