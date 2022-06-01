import React from 'react';
import renderer from 'react-test-renderer';
import GenerateQrRequest from '../src/screens/Request/GenerateRequestQR';
import {  render, fireEvent } from '@testing-library/react-native';

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
describe('TopUp', () => {
    it('renders correctly', () => {
        const mockedParams = {
            navigation:{navigate: jest.fn()} 
          };
        const tree = renderer.create( <GenerateQrRequest  {...mockedParams}/>).toJSON();
        expect(tree.type).toBe( 'View')
        const component = render( <GenerateQrRequest {...mockedParams}  />);
        // const visibleCard = component.getByTestId('visibleCard');
        // fireEvent.press(visibleCard);

        // const setVisible = component.getByTestId('setVisible');
        // fireEvent.press(setVisible);
        
     component.get
        const amount = component.getByTestId('amountInput');
        fireEvent.changeText(amount,"amountInput");

        const desc = component.getByTestId('description');
        fireEvent.changeText(desc,'hello');
        const button = component.getByTestId('button');
        fireEvent.press(button);

        // const toggle = component.getByTestId('toggle');
        // fireEvent.press(toggle);


      
    });
})