import React from 'react';
import renderer from 'react-test-renderer';
import BankCard from '../src/screens/DrawerScreens/Bank&Cards/index';
import {  render, fireEvent } from '@testing-library/react-native';
describe('Bank&Card', () => {
    it('renders correctly', () => {
        const tree = renderer.create( <BankCard  />).toJSON();
        expect(tree.type).toBe( 'View')
        const component = render( <BankCard  />);
        const nextPress = component.getByTestId('click');
        fireEvent.press(nextPress);

        const button = component.getByTestId('button');
        fireEvent.press(button);

        const bank = component.getByTestId('bank');
        fireEvent.press(bank);

    });
})