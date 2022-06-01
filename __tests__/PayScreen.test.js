import React, { useEffect } from 'react';
import renderer from 'react-test-renderer';
import PayScreen from '../src/screens/pay/index';
import {  render, fireEvent } from '@testing-library/react-native';
import { getRecentContact, getUserFriend } from '../src/services/Transaction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BarCodeScanner } from 'expo-barcode-scanner';

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

jest.mock('expo-contacts', () => {
  return{
    requestPermissionsAsync:jest.fn().mockResolvedValue({status :"granted"}),
    Fields:{PhoneNumbers:'PhoneNumbers'},
    getContactsAsync:jest.fn().mockResolvedValue({data :[{"phoneNumbers": '1111',}]}),
  }
});

jest.spyOn(React, 'useEffect').mockImplementation((f)=>{
  jest.mock('expo-barcode-scanner', () => {
    return{
      requestPermissionsAsync:jest.fn().mockResolvedValue({status :"granted"}),
    }
  });
});



beforeAll(async()=>{
 
  await AsyncStorage.setItem('userObj','{"id":1}')
  const testData = {"statuscode":"200","response":"true","message":"Fund transfer successfully.","transaction_id":"KSxdcQn3"};

  const mockFetch = Promise.resolve({ json: () => Promise.resolve(testData) });
   global.fetch = jest.fn().mockImplementation(() => mockFetch);
   getRecentContact().then((data) => {
    
  });


})
describe('PayScreen', () => {
    it('renders correctly', () => {

      // const spyAxios = jest.spyOn(BarCodeScanner, 'requestPermissionsAsync').mockResolvedValue({
      //   status : 'granted'
      // });
    
        const tree = renderer.create(<PayScreen  />).toJSON();
        expect(tree.type).toBe("Text");

          // const component = render(<PayScreen  />);
          // const contact = component.getByTestId('mobile');
          // fireEvent.changeText(contact,"2222222");
          // const data = component.getByTestId('mobile');
          // fireEvent.press(data);
          
    })
    });
