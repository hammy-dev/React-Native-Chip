import React from 'react';
import renderer from 'react-test-renderer';
import {  render, fireEvent } from '@testing-library/react-native';
import MyQRCode from '../src/screens/DrawerScreens/MyQRCode/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('MyQr', () => {
    it('renders correctly', () => {
      const store = mockStore({userInfo: {
        country_code: "+92",
        mob_num: "8888888",

      }});
        const tree = renderer.create(<Provider store={store}> <MyQRCode /></Provider>).toJSON();
      expect(tree[1].type).toBe( 'View')
     
    });
  });
  