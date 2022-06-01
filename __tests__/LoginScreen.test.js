import * as React from 'react'
import renderer from 'react-test-renderer';
import LoginComponent from '../src/screens/Login/index';
import LoginCard from '../src/components/Login/LoginCard';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {  render, fireEvent, waitFor } from '@testing-library/react-native';
import { Login } from '../src/services/UserService';

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Login', () => {
    it('renders correctly', () => {
      const store = mockStore({});
      const tree = renderer.create(<Provider store={store}><LoginComponent /></Provider>).toJSON();
        //const tree = renderer.create(<LoginComponenr />).toJSON();
    expect(tree.children.length).toBe(2
        );
    });
  });

  const mockedParams = {
    route: { params: { currentBid: 'whatever-id' } },
    navigation: {navigate:jest.fn()}
  };
  describe('LoginCard', () => {
    it('check success response', async() => {
      const store = mockStore({});
      const tree = renderer.create(<Provider store={store}><LoginCard {...mockedParams}/></Provider>).toJSON();
      expect(tree.children.length).toBe(2);

      const component= render(<Provider store={store}><LoginCard {...mockedParams} /></Provider>);
      const nextPress = await waitFor(() => component.getByTestId('button'));
      fireEvent.press(nextPress);
      expect(nextPress).toBeTruthy();

      const forgetPassword = await waitFor(() =>component.getByTestId('forgetPassword'));
      fireEvent.press(forgetPassword);
      expect(forgetPassword).toBeTruthy();
      
     

      const passwordField = await waitFor(() =>component.getByTestId('passwordField'));
      fireEvent.changeText(passwordField, "su");
      expect(passwordField).toBeTruthy();

      

      const responseData = {"statuscode":"200","response":"true","message":"User loginsuccessfully","data":{"id":"2150","username":"Txend","last_name":null,"country_code":"+92","mob_num":"3377246088","email":"noman.saeed@txend.com","profile_image":null,"security_pin_status":"0","qr_code":"WKzrS2wU","signup_otp_status":"0","roleId":"4","comp_reg_num":null,"tax_id":null,"dob":null,"id_type":null,"id_num":null,"login_status":"1","account_status":"1","app_status":"0"},"token":{"token":"ZlF4"}}
      const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);
      return Login({ countrycode:"+92", phoneNo:"3334321222", password:"11111" }).then(async (data) => {

       const phoneNumber = await waitFor(() =>component.queryByTestId('number'));
      fireEvent.changeText(phoneNumber.children[0], "3334321222");
      // expect(phoneNumber).toBeTruthy();

        const getUser = component.getByTestId('getUser');
        fireEvent.press(getUser);
        expect(getUser).toBeTruthy();
      });
      
    });


    it('check success response', async() => {
      const store = mockStore({});
      const tree = renderer.create(<Provider store={store}><LoginCard {...mockedParams}/></Provider>).toJSON();
      expect(tree.children.length).toBe(2);

      const component= render(<Provider store={store}><LoginCard {...mockedParams} /></Provider>);
      const nextPress = await waitFor(() => component.getByTestId('button'));
      fireEvent.press(nextPress);
      expect(nextPress).toBeTruthy();

      const forgetPassword = await waitFor(() =>component.getByTestId('forgetPassword'));
      fireEvent.press(forgetPassword);
      expect(forgetPassword).toBeTruthy();
      
     

      const passwordField = await waitFor(() =>component.getByTestId('passwordField'));
      fireEvent.changeText(passwordField, "su");
      expect(passwordField).toBeTruthy();

      

      const responseData = {"statuscode":"200","response":"false"}
      const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);
      return Login({ countrycode:"+92", phoneNo:"3334321222", password:"11111" }).then(async (data) => {

       const phoneNumber = await waitFor(() =>component.queryByTestId('number'));
      fireEvent.changeText(phoneNumber.children[0], "3334321222");
      // expect(phoneNumber).toBeTruthy();

        const getUser = component.getByTestId('getUser');
        fireEvent.press(getUser);
        expect(getUser).toBeTruthy();
      });
      
    });

  });