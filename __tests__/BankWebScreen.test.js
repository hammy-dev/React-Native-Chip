import React from 'react';
import renderer from 'react-test-renderer';
import BankWebview from '../src/screens/BankWebview/index';
import {  render, fireEvent } from '@testing-library/react-native';
describe('BankWebview', () => {
    it('renders correctly', () => {
        const mockedParams = {
            route: { params: { currentBid: 'whatever-id', url:'222' } },
            navigation:{navigate: jest.fn()} 
          };
        const tree = renderer.create(<BankWebview {...mockedParams}  />).toJSON();
            expect(tree.type).toBe("View");
            const component = render(<BankWebview {...mockedParams}  />);
            const button = component.getByTestId('button');
            fireEvent.press(button);
    });
});