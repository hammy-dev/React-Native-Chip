import React, { useEffect } from 'react';
import renderer from 'react-test-renderer';
import UserSignUp4 from '../src/screens/SignUp/UserSignUp4/index';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {  render, fireEvent } from '@testing-library/react-native';

import { otp } from '../src/services/UserService';
configure({ adapter: new Adapter() });
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

describe('UserSignUp4', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<UserSignUp4 route={{params: 'some param'}} />).toJSON();
        expect(tree.type).toBe("View");


        const responseData = {"otp":"200"}
        const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
        global.fetch = jest.fn().mockImplementation(() => mockFetch);
        return otp({first_name:"test",last_name:"test",otp:""}).then((data) => {
          const component= render(<UserSignUp4 route={{params: 'some param'}} />);
          // const nextPress = component.getByTestId('calendarPress');
          // fireEvent.press(nextPress);
         // expect(nextPress).toBeTruthy();
          const buttonPress = component.getByTestId('button');
          fireEvent.press(buttonPress);
          expect(buttonPress).toBeTruthy();
        });
      

    })
    });
   
