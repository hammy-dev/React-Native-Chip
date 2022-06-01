import React from 'react';
import renderer from 'react-test-renderer';
import GeneratedQr from '../src/screens/Request/GeneratedQR';
import {  render, fireEvent } from '@testing-library/react-native';

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
describe('GeneratedQr', () => {
    it('renders correctly', () => {
        const mockedParams = {
            navigation:{navigate: jest.fn()},
            route: {params:{amount:"2",description :'hello'}}

          };
        const tree = renderer.create( <GeneratedQr  {...mockedParams}/>).toJSON();
        expect(tree.type).toBe( 'View')
        const component = render( <GeneratedQr {...mockedParams}  />);
        // const visibleCard = component.getByTestId('visibleCard');
        // fireEvent.press(visibleCard);

        // const setVisible = component.getByTestId('setVisible');
        // fireEvent.press(setVisible);
        
        const button = component.getByTestId('button');
        fireEvent.press(button);

        const mockedParamsWithNoAmount = {
            navigation:{navigate: jest.fn()},
            route: {params:{amount:"",description :'hello'}}

          };

        const componentNoAmount = render( <GeneratedQr {...mockedParamsWithNoAmount}  />);
        // const visibleCard = component.getByTestId('visibleCard');
        // fireEvent.press(visibleCard);

        // const setVisible = component.getByTestId('setVisible');
        // fireEvent.press(setVisible);
        
        const id = componentNoAmount.getByTestId('button');
        fireEvent.press(id);

        // const toggle = component.getByTestId('toggle');
        // fireEvent.press(toggle);


      
    });
    
})