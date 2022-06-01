import React from 'react';
import renderer from 'react-test-renderer';
// import TopUp from '../src/screens/TopUp/index';
import DeleteAccount from '../src/screens/DrawerScreens/DeleteAccount'
import {  render, fireEvent } from '@testing-library/react-native';

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
describe('DeleteAccount', () => {
    it('renders correctly', () => {
        const mockedParams = {
            route: { params: { currentBid: 'whatever-id' } },
            navigation:{navigate: jest.fn()} 
          };
        const tree = renderer.create( <DeleteAccount {...mockedParams}  />).toJSON();
        expect(tree.type).toBe( 'View')
        const component = render( <DeleteAccount {...mockedParams} />);
        // const visibleCard = component.getByTestId('visibleCard');
        // fireEvent.press(visibleCard);

        // const setVisible = component.getByTestId('setVisible');
        // fireEvent.press(setVisible);
        
        const button = component.getByTestId('button');
        fireEvent.press(button);

        // // const toggle = component.getByTestId('toggle');
        // // fireEvent.press(toggle);

        // const decline = component.getByTestId('decline');
        // fireEvent.press(decline);

      
    });
})