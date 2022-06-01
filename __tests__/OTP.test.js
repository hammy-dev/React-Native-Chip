import React, { useEffect } from 'react';
import renderer from 'react-test-renderer';
import OTP from '../src/screens/otp/index';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {  render, fireEvent, waitFor, act } from '@testing-library/react-native';
import { otp } from '../src/services/UserService';

configure({ adapter: new Adapter() });
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

beforeAll(() => {
  const component= render(<OTP route={{params: 'some param'}} />);

  const pad1 = component.queryByTestId('pad1');
  fireEvent.changeText(pad1, "1");

  const pad2 = component.queryByTestId('pad2');
  fireEvent.changeText(pad2, "2");

  const pad3 = component.queryByTestId('pad3');
  fireEvent.changeText(pad3, "3");
  const pad4 = component.queryByTestId('pad4');
  fireEvent.changeText(pad4, "1");
});
describe('OTP', () => {
    it('renders correctly', () => {
        jest.spyOn(React, 'useEffect').mockImplementation((f)=>f());
        const tree = renderer.create(<OTP route={{params: 'some param'}} />).toJSON();
            expect(tree.type).toBe("View");
    })

    it('test otp call', async() => {
      jest.spyOn(React, 'useEffect').mockImplementation((f)=>f());
      const component= render(<OTP route={{params: 'some param'}} />);
      
      const responseData = {"otp":"200"}
      const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);
      return  otp({first_name:"test",last_name:"test",otp:""}).then(async(data) => {
        const nextPress = component.getByTestId('button');
        await act( async () => { 
      
        fireEvent.press(nextPress);
        expect(nextPress).toBeTruthy();
        });
       });
    })


    it('test otp verifycall', async() => {
      jest.spyOn(React, 'useEffect').mockImplementation((f)=>f());
      const component= render(<OTP route={{params: 'some param'}} />);
      
      const responseData = {"otp":"200"}
      const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);
      return  otp({first_name:"test",last_name:"test",otp:""}).then(async(data) => {
        const nextPress = component.getByTestId('button');
        await act( async () => { 
      
        fireEvent.press(nextPress);
        expect(nextPress).toBeTruthy();
        });
       });
      
        
    })

  });
   
