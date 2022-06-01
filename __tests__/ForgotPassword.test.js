import React, { useEffect } from 'react';
import renderer from 'react-test-renderer';
import ForgotPassword from '../src/screens/ForgotPassword/index';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {  render, fireEvent } from '@testing-library/react-native';
import { checkemailexist } from '../src/services/UserService';
configure({ adapter: new Adapter() });


jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

describe('ForgotPassword', () => {
    it('renders correctly', () => {
        jest.spyOn(React, 'useEffect').mockImplementation((f)=>f());
        const tree = renderer.create(<ForgotPassword route={{params: 'some param'}} />).toJSON();
        expect(tree.type).toBe("View");
        
        

        
    })
    it('renders correctly', () => {
      const mockData= {
        email:"abc@email.com",
      }
      const responseData = {"statuscode":"200","response":"True","message":"Email exist"}
      const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);
      return checkemailexist("abc@email.com").then((data) => {
        const navigation = { navigate: jest.fn() };
        const component = render(<ForgotPassword route={{params: 'some param'}} navigation={navigation}/>);
        const nextPress = component.getByTestId('button');
        fireEvent.press(nextPress);
        expect(nextPress).toBeTruthy();
        expect(data).toEqual(responseData);
      });
    })

   
    });
   
