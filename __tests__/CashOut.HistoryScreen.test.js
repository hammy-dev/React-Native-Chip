import React from 'react';
import renderer from 'react-test-renderer';
import CashboutHistory from '../src/screens/DrawerScreens/CastOutHistory';
import { cashOutHistory } from '../src/services/Cashout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  render, fireEvent, waitFor, act } from '@testing-library/react-native';
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);


beforeAll(async() => {
    
  });

describe('CashboutHistory', () => {
    it('renders correctly',async () => {
       
        await AsyncStorage.setItem('userObj','{"id":1}')
        const responseData = {"statuscode":"200","response":"true","data":{"id":"2160","company_name":"Txend","country_code":"92","mob_num":"0316456",
        "email":"muh.hamza@txend.com","comp_reg_num":null,"tax_id":null,"profile_image":null,"qr_code":"gNphtuPe","signup_otp_status":"0","roleId":"4","businessId":null,
        "login_status":"1","account_status":"1","identity_img":null,"headshot_img":null},"token":{"token":"eyJ0e0"}}
        const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
        global.fetch = jest.fn().mockImplementation(() => mockFetch);
        return  cashOutHistory().then(async(data) => {
         
         //   await act( async () => { 
                jest.spyOn(React, 'useEffect').mockImplementation((f)=>f());
            expect(responseData).toBe( data)
           
            // const tree = renderer.create( <CashboutHistory  />).toJSON();
            // expect(tree.type).toBe( 'View')

           // const component = render(<CashboutHistory/>)
            
          //  });
         });
        
       
    });
   
  });