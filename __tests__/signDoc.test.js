import React from 'react';
import renderer from 'react-test-renderer';
import SignDoc from '../src/screens/sign/index';
import {  render, fireEvent, waitFor, act } from '@testing-library/react-native';
import { MerchantSignUp } from '../src/services/UserService';

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
jest.mock('expo-notifications', () => ({
    getPermissionsAsync:jest.fn().mockResolvedValue({status :"granted"}),
    getExpoPushTokenAsync: jest.fn().mockResolvedValue({data:{ExponentPushToken:'sss'}})
   
  }));
const mockedParams = {
    route: { params: { currentBid: 'whatever-id' } },
    navigation: {navigate:jest.fn()}
  };
describe('signDoc', () => {
    
    it('renders correctly', async() => {
        
        jest.spyOn(React, 'useEffect').mockImplementation((f)=>f());

        const tree = renderer.create( <SignDoc {...mockedParams} />).toJSON();
        expect(tree.type).toBe( 'View')
        const component= render(<SignDoc {...mockedParams} />);

        const nextPress = component.getByTestId('activeButton');
        await act( async () => { 
      
        fireEvent.press(nextPress);
        expect(nextPress).toBeTruthy();
        });

        const inactiveButton = component.getByTestId('inactiveButton');
        await act( async () => { 
        fireEvent.press(inactiveButton);
        expect(inactiveButton).toBeTruthy();
        });

        
        const mockData= {
            device_token : 'cXnDUPmrIEo:APA91bGO4Sa9TfpJOBRsoQfObBfWO-lzlsS4Cvg5FnpZBF1JuyuHv1YgaKW1UO31bpXPrBejA67HC2DdK_5UwIV5zSGn08Co3oXGu1p6TZIOGFzdSCcSITtLpplo2kV_sGs9qFsCStwA',
            device_type : 'andriod',
            roleId : '3',
            company_name : 'Txend'
          }
          const mockFetch = Promise.resolve({ json: () => Promise.resolve(mockData) });
          global.fetch = jest.fn().mockImplementation(() => mockFetch);
        return  MerchantSignUp(mockData).then(async(data) => {
                const upload = component.getByTestId('upload');
                await act( async () => { 
                fireEvent.press(upload);
                expect(upload).toBeTruthy();
                });

                const modalButton = component.getByTestId('modalButton');
                await act( async () => { 
                fireEvent.press(modalButton);
                expect(modalButton).toBeTruthy();
                });

                
           });
    });

  
   
  });
  