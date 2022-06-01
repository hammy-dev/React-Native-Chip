import React from 'react';
import renderer from 'react-test-renderer';
import CashOut  from '../src/screens/CashOut';
import {  render, fireEvent } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getBanksByUser, addBankdetails } from '../src/services/Cashout';
import { Alert } from 'react-native';

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

const mockedNavigate = jest.fn();



  const mockedParams = {
    navigation:{navigate:jest.fn()}

  };

//   beforeAll(async()=>{
//      AsyncStorage.setItem('userObj','{"id":1}').then(data=>{
// console.log(data)
//     })
//   })
describe('Cashout', () => {
    it('renders correctly', async() => {
      await AsyncStorage.setItem('userObj','{"id":1}')
     
      const responseData = {"statuscode":"200","response":"true","message":"bank list",
      "data":[{bank_name:"test",account_number:"111"}]}
      const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);
      return getBanksByUser('1').then((data) => {
        expect(responseData).toBe(data)
        jest.spyOn(React, 'useEffect').mockImplementation((f)=>f());
        const spy = jest.spyOn(Alert, 'alert');
      
        const tree = renderer.create( <CashOut  {...mockedParams}/>).toTree()
        expect(tree.nodeType).toBe( 'component')
        const component = render( <CashOut {...mockedParams}  />);
        const click = component.getByTestId('visible');
        fireEvent.press(click);

        const navigate = component.getByTestId('navigate');
        fireEvent.press(navigate);
        const input = component.getByTestId('input');
        fireEvent.changeText(input,"1234");

        const button = component.getByTestId('button');
        fireEvent.press(button);

        spy.mock.calls[0][2][1].onPress();
        expect(spy).toHaveBeenCalled(); //passes
        const back = component.getByTestId('back');
        fireEvent.press(back);
     
     });
      
      

      
    });
    
})