import { getRecentContact,FoundTransfer,requestMoney ,getAvailableBalance,pendingPayments,completedPayments} from '../src/services/Transaction';
import AsyncStorage from '@react-native-async-storage/async-storage';
jest.mock('axios', () => {
  return {
    post: jest.fn()
  };
});
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

describe('Transactions', () => {
    describe('getRecentContact', () => {
        it('Got recent contacts', async () => {
          await AsyncStorage.setItem('userObj','{"id":1}')
           const testData = {"statuscode":"200","response":"true","message":"Fund transfer successfully.","transaction_id":"KSxdcQn3"};
       
           const mockFetch = Promise.resolve({ json: () => Promise.resolve(testData) });
            global.fetch = jest.fn().mockImplementation(() => mockFetch);
           return getRecentContact().then((data) => {
             expect(data).toEqual(testData);
           });
          });
        })
    describe('requestMoney', () => {
      it('Request Money', async () => {
          const testData = {"statuscode":"200","response":"true","message":"Fund transfer successfully.","transaction_id":"KSxdcQn3"};
          const mockData= {
            sender_id:'2154',
            phoneno:'2222',
            phoneno:23,
            description:' i am description',
            type:'Transfer',
            sendername:'sender Name',
            receiver_id:'2',
            photo:'2323'


        }
        await AsyncStorage.setItem('token','23232323232')
          const mockFetch = Promise.resolve({ json: () => Promise.resolve(testData) });
          global.fetch = jest.fn().mockImplementation(() => mockFetch);
          return requestMoney(mockData).then((data) => {
            expect(data).toEqual(testData);
          });
        });
      })
        describe('FoundTransfer', () => {
            it('Transfer funds', () => {
                const mockData= {
                    user_id:'2154',
                    receiver_id:'2222',
                    amount:23,
                    desc:' i am description',
                    type:'Transfer',
                    sendername:'sender Name'
                }
               const testData = '"statuscode":"200","response":"true","data":[{"id":"2126","username":"YjDMLEMD2yORafevf27LhQ==","profile_image":null,"mob_num":"dm2nOc6\/eVdsw1LlbUuk2A=="},{"id":"2150","username":"Txend","profile_image":null,"mob_num":"3138075407"},{"id":"2155","username":"Txend","profile_image":null,"mob_num":"3013162248"}]}';
           
               const mockFetch = Promise.resolve({ json: () => Promise.resolve(testData) });
                global.fetch = jest.fn().mockImplementation(() => mockFetch);
               return FoundTransfer(mockData).then((data) => {
                 expect(data).toEqual(testData);
               });
              });
            })
            describe('getAvailableBalance', () => {
              it('getAvailableBalance', async () => {
                await AsyncStorage.setItem('userObj','{"id":1}')
                await AsyncStorage.setItem('token','1}')
                 const testData = '"statuscode":"200","response":"true","data":[{"id":"2126","username":"YjDMLEMD2yORafevf27LhQ==","profile_image":null,"mob_num":"dm2nOc6\/eVdsw1LlbUuk2A=="},{"id":"2150","username":"Txend","profile_image":null,"mob_num":"3138075407"},{"id":"2155","username":"Txend","profile_image":null,"mob_num":"3013162248"}]}';
             
                 const mockFetch = Promise.resolve({ json: () => Promise.resolve(testData) });
                  global.fetch = jest.fn().mockImplementation(() => mockFetch);
                 return getAvailableBalance().then((data) => {
                   expect(data).toEqual(testData);
                 });
                });
              })
          describe('pendingPayments', () => {
            it('pendingPayments', async () => {
              await AsyncStorage.setItem('userObj','{"id":1}')
              await AsyncStorage.setItem('token','1}')
                const testData = '"statuscode":"200","response":"true","data":[{"id":"2126","username":"YjDMLEMD2yORafevf27LhQ==","profile_image":null,"mob_num":"dm2nOc6\/eVdsw1LlbUuk2A=="},{"id":"2150","username":"Txend","profile_image":null,"mob_num":"3138075407"},{"id":"2155","username":"Txend","profile_image":null,"mob_num":"3013162248"}]}';
            
                const mockFetch = Promise.resolve({ json: () => Promise.resolve(testData) });
                global.fetch = jest.fn().mockImplementation(() => mockFetch);
                return pendingPayments().then((data) => {
                  expect(data).toEqual(testData);
                });
              });
            })
            describe('completedPayments', () => {
              it('completedPayments', async () => {
                await AsyncStorage.setItem('userObj','{"id":1}')
                await AsyncStorage.setItem('token','1}')
                  const testData = '"statuscode":"200","response":"true","data":[{"id":"2126","username":"YjDMLEMD2yORafevf27LhQ==","profile_image":null,"mob_num":"dm2nOc6\/eVdsw1LlbUuk2A=="},{"id":"2150","username":"Txend","profile_image":null,"mob_num":"3138075407"},{"id":"2155","username":"Txend","profile_image":null,"mob_num":"3013162248"}]}';
              
                  const mockFetch = Promise.resolve({ json: () => Promise.resolve(testData) });
                  global.fetch = jest.fn().mockImplementation(() => mockFetch);
                  return completedPayments().then((data) => {
                    expect(data).toEqual(testData);
                  });
                });
              })
  });