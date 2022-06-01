import React from 'react';
import renderer from 'react-test-renderer';
import Request  from '../src/screens/Request';
import {  render, fireEvent } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getRecentContact, getUserFriend } from '../src/services/Transaction';

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);


const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => (
  { useNavigation: () => ({ navigate: mockedNavigate }) }));

  jest.mock('expo-contacts', () => {

    return{
      requestPermissionsAsync:jest.fn().mockResolvedValue({status :"granted"}),
      Fields:{PhoneNumbers:'PhoneNumbers'},
      getContactsAsync:jest.fn().mockResolvedValue({data :[{"phoneNumbers": '1111',}]}),
    }
   
  
   
  });



  beforeAll(async()=>{
    await AsyncStorage.setItem('userObj','{"id":1}')
    const testData = {"statuscode":"200","response":"true","message":"Fund transfer successfully.","transaction_id":"KSxdcQn3"};

    const mockFetch = Promise.resolve({ json: () => Promise.resolve(testData) });
     global.fetch = jest.fn().mockImplementation(() => mockFetch);
     getRecentContact().then((data) => {
      
    });


  })

describe('RequestScreen', () => {
    it('renders correctly', () => {
        jest.spyOn(React, 'useEffect').mockImplementation((f)=>f());
        const mockedParams = {
            navigation:{navigate:jest.fn()}

          };
        const tree = renderer.create(<Request  {...mockedParams}/>).toTree()
        expect(tree.nodeType).toBe( 'component')
        const component = render( <Request {...mockedParams}  />);
        const contact = component.getByTestId('contact');
        fireEvent.changeText(contact,"2222222");
        const click = component.getByTestId('button');
        fireEvent.press(click);
        const data = component.getByTestId('data');
        fireEvent.press(data);

        // const setVisible = component.getByTestId('setVisible');
        // fireEvent.press(setVisible);
        

      
    });
    
})