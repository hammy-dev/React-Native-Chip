import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../src/screens/DrawerScreens/Profile/index';
import {  render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('Profile', () => {
    it('renders correctly', () => {
      const store =  mockStore({   userInfo: {profile_image: '123.jpg', username:"test",email:"test@test.com", country_code:"92",mob_num:"12342222"}});
      const mockedParams = {
        navigation: {navigate:jest.fn()},
        route: {params: 'some param'},
      };
        const tree = renderer.create(<Provider store={store}><Profile {...mockedParams}  /></Provider>).toJSON();
            expect(tree.type).toBe("View");
            const component = render( <Provider store={store}><Profile {...mockedParams}  /></Provider>);
            const button = component.getByTestId('button');
            fireEvent.press(button);
    })

    it('check without image', () => {
      const store =  mockStore({   userInfo: {profile_image: ''}});
      const mockedParams = {
        navigation: {navigate:jest.fn()},
        route: {params: 'some param'},
      };
        const tree = renderer.create(<Provider store={store}><Profile {...mockedParams}  /></Provider>).toJSON();
            expect(tree.type).toBe("View");
    })
});
   
