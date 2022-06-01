import * as React from 'react'
import renderer from 'react-test-renderer';
import LoginComponent from '../src/screens/Login/index';
import LoginCard from '../src/components/Login/LoginCard';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {  render, fireEvent, waitFor, act } from '@testing-library/react-native';
import ChangePassword  from '../src/screens/DrawerScreens/ChangePassword';
import { updateUserPassword} from '../src/services/UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Change Password', () => {
    it('renders correctly', async() => {
      const store = mockStore({});
      const tree = renderer.create(<Provider store={store}><ChangePassword /></Provider>).toJSON();
      expect(tree.children.length).toBe(2);
      const component= render(<Provider store={store}> <ChangePassword   /></Provider>);
      const current = component.getByTestId('current');
    fireEvent.changeText(current,"1233");

    const newInput = component.getByTestId('new');
    fireEvent.changeText(newInput,"12334");

    const reEnter = component.getByTestId('re-enter');
    fireEvent.changeText(reEnter,"12334");


    const testData = {"statuscode":"200","response":"true","message":"User login successfully","data":{"id":"2150","username":"Txend","last_name":null,"country_code":"92","mob_num":"3377246088","email":"noman.saeed@txend.com","profile_image":null,"security_pin_status":"0","qr_code":"WKzrS2wU","signup_otp_status":"0","roleId":"4","comp_reg_num":null,"tax_id":null,"dob":null,"id_type":null,"id_num":null,"login_status":"1","account_status":"1","app_status":"0"},"token":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"}};
    await AsyncStorage.setItem('userObj','{"id":1}')
    const mockFetch = Promise.resolve({ json: () => Promise.resolve(testData) });
     global.fetch = jest.fn().mockImplementation(() => mockFetch);
    return updateUserPassword('abc','abc').then(async(data) => {
       await act(async() => {
                expect(data).toEqual(testData);
                const nextPress = component.getByTestId('button');
                fireEvent.press(nextPress);
                
                expect(nextPress).toBeTruthy();

                await new Promise(res => setTimeout(res, 3000));
                
        });
        
    });
   });

  })
