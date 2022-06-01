import * as React from 'react'
import renderer from 'react-test-renderer';
import DeleteAccountLast from '../../Chip-RN/src/screens/DrawerScreens/DeleteAccountLast'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {  render, fireEvent, waitFor, act } from '@testing-library/react-native';
import { deleteUserAccount } from '../src/services/UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

beforeAll(async() => {
 // deleteUserAccount= jest.fn().mockResolvedValue( {"statuscode":"200","response":"true"});
 await AsyncStorage.setItem('userObj','{"id":1}')
});

describe('DeleteAccountLast', () => {
    it('renders correctly', async() => {
      const store = mockStore({});
      const mockedParams = {
        route: { params: { currentBid: 'whatever-id' } },
        
      };
      const tree = renderer.create(<Provider store={store}  ><DeleteAccountLast {...mockedParams}/></Provider>).toJSON();
      expect(tree.type).toBe("View");
  
    });

    it('api call test', async() => {
      const store = mockStore({});
      const mockedParams = {
        route: { params: { currentBid: 'whatever-id' } },
        
      };
      const component = render(<Provider store={store}  ><DeleteAccountLast {...mockedParams}/></Provider>);
      const getUser = component.getByTestId('button');
      fireEvent.press(getUser);
      expect(getUser).toBeTruthy();

      const checkbox = component.getByTestId('checkbox');
      fireEvent.press(checkbox);

      // const cancel = component.getByTestId('cancel')
      // fireEvent.press(cancel)
    
    
      const nextPress = component.getByTestId('button');
        
        
      fireEvent.press(nextPress);
      const responseData = {statuscode:"200",response:"true"}
      const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);
      await act( async () => { 
        return deleteUserAccount( 'test','test@test.com', 'test','1111').then(async (data) => {
          const deleted = component.getByTestId('delete');
          fireEvent.press(deleted); 
          expect(nextPress).toBeTruthy();
          expect(data).toEqual(responseData);
          });
        
      
    
    });
  })
  });