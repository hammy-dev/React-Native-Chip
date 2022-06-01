import React, { useEffect } from 'react';
import renderer from 'react-test-renderer';
import AmountDetails from '../src/screens/AmountDetails/index';
import {  render, fireEvent, waitFor } from '@testing-library/react-native';
import { Alert } from 'react-native';
import { FoundTransfer } from '../src/services/Transaction';

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

describe('AmountDetails', () => {
    it('renders correctly', () => {
        jest.spyOn(React, 'useEffect').mockImplementation((f)=>f());
        const tree = renderer.create(<AmountDetails route={{params: 'some param'}} />).toJSON();
            expect(tree.type).toBe("View");
    })
   
    it('test change events', async() => {

    const spy = jest.spyOn(Alert, 'alert');
      jest.spyOn(React, 'useEffect').mockImplementation((f)=>f());
      const component= render(<AmountDetails  route={{params: 'some param'}} />);

      const amount = await waitFor(() =>component.getByTestId('amount'));
      fireEvent.changeText(amount, "123");
      expect(amount).toBeTruthy();

      const description = await waitFor(() =>component.getByTestId('description'));
      fireEvent.changeText(description, "test");
      expect(description).toBeTruthy();

      const nextPress = component.getByTestId('pay');
      fireEvent.press(nextPress);
    
     

      const responseData = '"statuscode":"200","response":"true","data":[{"id":"2126","username":"YjDMLEMD2yORafevf27LhQ==","profile_image":null,"mob_num":"dm2nOc6\/eVdsw1LlbUuk2A=="},{"id":"2150","username":"Txend","profile_image":null,"mob_num":"3138075407"},{"id":"2155","username":"Txend","profile_image":null,"mob_num":"3013162248"}]}';


      const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);
      return FoundTransfer({ receiver_id: 1, amount:1, desc: "ssss" }).then( (data) => {
        spy.mock.calls[0][2][1].onPress();
        expect(spy).toHaveBeenCalled(); //passes
      });
   
  })
    });
   
