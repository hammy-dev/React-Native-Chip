import React from 'react';
import renderer from 'react-test-renderer';
// import TopUp from '../src/screens/TopUp/index';
import AddMoney from '../src/screens/AddMoney'
import {  render, fireEvent } from '@testing-library/react-native';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
describe('Add Money', () => {
    it('renders correctly', () => {
        const mockedParams = {
            balance: '2',
            navigation:{navigate: jest.fn()} 
          };
          const store = mockStore({});
         
        const tree = renderer.create( <Provider store={store}><AddMoney {...mockedParams}  /></Provider> ).toJSON();
        expect(tree.type).toBe( 'View')
        const component = render(  <Provider store={store}><AddMoney {...mockedParams}  /></Provider>);
        // const visibleCard = component.getByTestId('visibleCard');
        // fireEvent.press(visibleCard);

        const setVisible = component.getByTestId('pay');
        fireEvent.press(setVisible);
        
        const button = component.getByTestId('amount');
        fireEvent.changeText(button,"test");

        // // const toggle = component.getByTestId('toggle');
        // // fireEvent.press(toggle);

        // const decline = component.getByTestId('decline');
        // fireEvent.press(decline);

      
    });
})