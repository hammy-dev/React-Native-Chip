import React from 'react';
import renderer from 'react-test-renderer';
import EditProfile from '../src/screens/DrawerScreens/EditProfile/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {  render, fireEvent, act } from '@testing-library/react-native';

import { updateProfile } from '../src/services/UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

beforeAll(async() => {

    await AsyncStorage.setItem('userObj','{"id":1}')
   });
   
describe('EditProfile', () => {
    it('renders correctly', async() => {
        const store =  mockStore({   userInfo: {profile_image: '123.jpg', username:"test",email:"test@test.com", country_code:"92",mob_num:"12342222"}});
        const tree = renderer.create(<Provider store={store}><EditProfile  /></Provider>).toJSON();
        expect(tree.type).toBe("View");


        const component = render( <Provider store={store}><EditProfile  /></Provider>);
           

        const responseData = {statuscode:"200",response:"true"}
        const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
        global.fetch = jest.fn().mockImplementation(() => mockFetch);
        await act( async () => { 
            return updateProfile( '1', 2, '222', '1111').then(async (data) => {
            const button = component.getByTestId('button');
            fireEvent.press(button);
            expect(button).toBeTruthy();
            expect(data).toEqual(responseData);
            });
        });
    });
});