import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/screens/Home/index';
import {  render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Input', () => {
    it('renders correctly', () => {
        const store = mockStore({});
        const mockedParams = {
          route: { params: { currentBid: 'whatever-id' } },
          navigation: {navigate:jest.fn()}
        };
        const tree = renderer.create(<Provider store={store}> <Home {...mockedParams} /></Provider>).toJSON();
        expect(tree[1].type).toBe( 'View')
        const props = { navigate: jest.fn() };
        const component= render(<Provider store={store}> <Home   {...mockedParams} /></Provider>);
        const nextPress = component.getByTestId('image');
        fireEvent.press(nextPress);
        expect(nextPress).toBeTruthy();

        

        const pay = component.getByTestId('pay');
        fireEvent.press(pay);
        expect(pay).toBeTruthy();

        const money = component.getByTestId('money');
        fireEvent.press(money);
        expect(money).toBeTruthy();

        const request = component.getByTestId('request');
        fireEvent.press(request);
        expect(request).toBeTruthy();

     
        
        const cashout = component.getByTestId('cashout');
        fireEvent.press(cashout);
        expect(cashout).toBeTruthy();
        
        const button = component.getByTestId('button');
        fireEvent.press(button);
        expect(button).toBeTruthy();
        
        // const billTransaction = component.getByTestId('billTransaction');
        // fireEvent.press(billTransaction);
      
        const wallet = component.getByTestId('close');
        fireEvent.press(wallet);
        expect(wallet).toBeTruthy();


    });

    it('check all payment request', () => {
      const store = mockStore({});
      const mockedParams = {
        route: { params: { currentBid: 'whatever-id' } },
        navigation: {navigate:jest.fn()}
      };
      const component= render(<Provider store={store}> <Home   {...mockedParams} /></Provider>);
      const checkbox = component.getByTestId('All');
      fireEvent.press(checkbox);
      expect(checkbox).toBeTruthy();
    })
   
  });