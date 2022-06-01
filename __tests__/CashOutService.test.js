import { getBanksByUser, addBankdetails,addBank, cashOutHistory} from '../src/services/Cashout';
import AsyncStorage from '@react-native-async-storage/async-storage';
jest.mock('axios', () => {
  return {
    post: jest.fn()
  };
});


jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

describe('getBanksByUser', () => {

    it('update User Password', async () => {
  
        await AsyncStorage.setItem('userObj','{"id":1}')
        const responseData = '{"statuscode":"200","response":"true","message":"User register successfully","data":{"id":"2160","company_name":"Txend","country_code":"92","mob_num":"0316456","email":"muh.hamza@txend.com","comp_reg_num":null,"tax_id":null,"profile_image":null,"qr_code":"gNphtuPe","signup_otp_status":"0","roleId":"4","businessId":null,"login_status":"1","account_status":"1","identity_img":null,"headshot_img":null},"token":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTA4ODMwMzUsImV4cCI6MTY1MDg4MzAzNX0.vp_7VNECJlSXDhc_HWZJfzrPcd4N3htzW-eZx7LJtk0"}}'
        const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
        global.fetch = jest.fn().mockImplementation(() => mockFetch);
       return getBanksByUser().then((data) => {
         expect(data).toEqual(responseData);
       });
       
    });
  })
       describe('addBankdetails', () => {

        it('add Bank Details', async () => {
            const data= {
              user_id:"92",
              bank_name: "11111111",
              amount:"11111",
              account_num : "123445",
              adress : "street A "
          }
            // await AsyncStorage.setItem('userObj','{"id":1}')
            const responseData = '{"statuscode":"200","response":"true","message":"User register successfully","data":{"id":"2160","company_name":"Txend","country_code":"92","mob_num":"0316456","email":"muh.hamza@txend.com","comp_reg_num":null,"tax_id":null,"profile_image":null,"qr_code":"gNphtuPe","signup_otp_status":"0","roleId":"4","businessId":null,"login_status":"1","account_status":"1","identity_img":null,"headshot_img":null},"token":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTA4ODMwMzUsImV4cCI6MTY1MDg4MzAzNX0.vp_7VNECJlSXDhc_HWZJfzrPcd4N3htzW-eZx7LJtk0"}}'
            const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
            global.fetch = jest.fn().mockImplementation(() => mockFetch);
           return addBankdetails(data).then((data) => {
             expect(data).toEqual(responseData);
           });
        });
      })

      describe('addBank', () => {

        it('add Bank', async () => {
            const data= {
              user_id:"92",
              bank_name: "11111111",
              amount:"11111",
              account_num : "123445",
              adress : "street A "
          }
            // await AsyncStorage.setItem('userObj','{"id":1}')
            const responseData = '{"statuscode":"200","response":"true","message":"User register successfully","data":{"id":"2160","company_name":"Txend","country_code":"92","mob_num":"0316456","email":"muh.hamza@txend.com","comp_reg_num":null,"tax_id":null,"profile_image":null,"qr_code":"gNphtuPe","signup_otp_status":"0","roleId":"4","businessId":null,"login_status":"1","account_status":"1","identity_img":null,"headshot_img":null},"token":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTA4ODMwMzUsImV4cCI6MTY1MDg4MzAzNX0.vp_7VNECJlSXDhc_HWZJfzrPcd4N3htzW-eZx7LJtk0"}}'
            const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
            global.fetch = jest.fn().mockImplementation(() => mockFetch);
           return addBank(data).then((data) => {
             expect(data).toEqual(responseData);
           });
        });
      })
      describe('cashOutHistory', () => {

        it('Cash Out History', async () => {
            const data= {
              user_id:"92",
              bank_name: "11111111",
              amount:"11111",
              account_num : "123445",
              adress : "street A "
          }
            await AsyncStorage.setItem('userObj','{"id":1}')
            const responseData = '{"statuscode":"200","response":"true","message":"User register successfully","data":{"id":"2160","company_name":"Txend","country_code":"92","mob_num":"0316456","email":"muh.hamza@txend.com","comp_reg_num":null,"tax_id":null,"profile_image":null,"qr_code":"gNphtuPe","signup_otp_status":"0","roleId":"4","businessId":null,"login_status":"1","account_status":"1","identity_img":null,"headshot_img":null},"token":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTA4ODMwMzUsImV4cCI6MTY1MDg4MzAzNX0.vp_7VNECJlSXDhc_HWZJfzrPcd4N3htzW-eZx7LJtk0"}}'
            const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
            global.fetch = jest.fn().mockImplementation(() => mockFetch);
           return cashOutHistory().then((data) => {
             expect(data).toEqual(responseData);
           });
        });
      })
 
    