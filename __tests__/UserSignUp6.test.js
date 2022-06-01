import React, { useEffect } from 'react';
import renderer from 'react-test-renderer';
import UserSignUp6 from '../src/screens/SignUp/UserSignUp6/index';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {  render, fireEvent, act } from '@testing-library/react-native';

configure({ adapter: new Adapter() });
import { signup } from '../src/services/UserService';
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

const mockedParams = {
  route: { params: { currentBid: 'whatever-id' } },
  navigation: {navigate:jest.fn()}
};

jest.mock('expo-notifications', () => ({
  getPermissionsAsync:jest.fn().mockResolvedValue({status :"granted"})
 
}));

jest.spyOn(React, 'useEffect').mockImplementation((f)=>f());
describe('UserSignUp6', () => {
 
    it('renders correctly', () => {
     
       
       
        const tree = renderer.create(<UserSignUp6  {...mockedParams} />).toJSON();
        expect(tree.type).toBe("View");
     
    })
    it('success response', () => {
     
      const responseData = {"response":"true"}
      const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);
      return signup({first_name:"test",last_name:"test"}).then(async(data) => {

        const component= render(<UserSignUp6  {...mockedParams} />);
        await act(async()=>{
        const nextPress = component.getByTestId('button');
        fireEvent.press(nextPress);
        });
      });
    })


    it('failure response', () => {
      const responseData = {"response":"false"}
      const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);
      return signup({first_name:"test",last_name:"test"}).then(async (data) => {
        const component= render(<UserSignUp6  {...mockedParams} />);
        await act(async()=>{
          const nextPress = component.getByTestId('button');
          fireEvent.press(nextPress);
          await new Promise(res => setTimeout(res, 3000));

        })
       
      });
    })
    });
   
