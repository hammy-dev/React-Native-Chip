import { Login,otp,otpVerify,checkemailexist,checkUserPinIsSet,signup,resetPasswordEmail,
  addUserPin,
  MerchantSignUp,getUserDetails,getAllBank,updateProfile,deleteUserAccount ,updateUserPassword} from '../src/services/UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';
jest.mock('axios', () => {
  return {
    post: jest.fn()
  };
});


jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

describe('User service', () => {
    describe('Login', () => {
        it('succesfully login user', () => {
            const mockData= {
                countrycode:"92",
                phoneNo: "11111111",
                passowd:"11111"
            }
           const testData = '{"statuscode":"200","response":"true","message":"User login successfully","data":{"id":"2150","username":"Txend","last_name":null,"country_code":"92","mob_num":"3377246088","email":"noman.saeed@txend.com","profile_image":null,"security_pin_status":"0","qr_code":"WKzrS2wU","signup_otp_status":"0","roleId":"4","comp_reg_num":null,"tax_id":null,"dob":null,"id_type":null,"id_num":null,"login_status":"1","account_status":"1","app_status":"0"},"token":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTA2MjI5OTcsImV4cCI6MTY1MDYyMjk5N30.FO4gjp4AdE_gFzoAxLRlkSkGceqBX1sSZ-TSDsR7Fi4"}}';
       
           const mockFetch = Promise.resolve({ json: () => Promise.resolve(testData) });
            global.fetch = jest.fn().mockImplementation(() => mockFetch);
           return Login(mockData).then((data) => {
             expect(data).toEqual(testData);
           });
          });
          it('unsuccessfully login user', () => {
            const mockData= {
                countrycode:"92",
                phoneNo: "11111111",
                passowd:"11111"
            }
            const errorData = {"statuscode":"400","response":"false","message":"Login Fail! Mobile number or Password Is Invalid."}
            const errorResponse = jest.fn().mockRejectedValue(new Error(errorData));
            global.fetch = jest.fn().mockRejectedValue(errorResponse);
            const expectedError = new Error(
                errorData
            );
            expect(Login(mockData)).rejects.toThrow(expectedError);
           });
        })


        describe('otp', () => {

            it('send OTP Success request ', () => {
                const mockData= {
                    country_code:"92",
                    mob_num: "11111111",
                }
                const responseData = {"statuscode":"200","response":"true","message":"Otp send on your registered phone number","otp":6908}
                const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
                global.fetch = jest.fn().mockImplementation(() => mockFetch);
               return otp(mockData).then((data) => {
                 expect(data).toEqual(responseData);
               });
            });


            it('send OTP verify Success request ', () => {
            
                const responseData = {"statuscode":"200","response":"true","message":"Otp verified successfully"}
                const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
                global.fetch = jest.fn().mockImplementation(() => mockFetch);
               return otpVerify("1111","92","111").then((data) => {
                 expect(data).toEqual(responseData);
               });
            });
        })
        describe('checkemailexist', () => {

          it('Email found ', () => {
              const mockData= {
                  email:"abc@email.com",
              }
              const responseData = {"statuscode":"200","response":"True","message":"Email exist"}
              const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
              global.fetch = jest.fn().mockImplementation(() => mockFetch);
             return checkemailexist(mockData).then((data) => {
               expect(data).toEqual(responseData);
             });
          });
      })
      describe('signup', () => {

        it('Successfully signUP ', () => {
            const mockData= {
              device_token : 'cXnDUPmrIEo:APA91bGO4Sa9TfpJOBRsoQfObBfWO-lzlsS4Cvg5FnpZBF1JuyuHv1YgaKW1UO31bpXPrBejA67HC2DdK_5UwIV5zSGn08Co3oXGu1p6TZIOGFzdSCcSITtLpplo2kV_sGs9qFsCStwA',
              device_type : 'andriod',
              roleId : '4',
              company_name : 'Txend'
            }
            const responseData = '{"statuscode":"200","response":"true","message":"User register successfully","data":{"id":"2160","company_name":"Txend","country_code":"92","mob_num":"0316456","email":"muh.hamza@txend.com","comp_reg_num":null,"tax_id":null,"profile_image":null,"qr_code":"gNphtuPe","signup_otp_status":"0","roleId":"4","businessId":null,"login_status":"1","account_status":"1","identity_img":null,"headshot_img":null},"token":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTA4ODMwMzUsImV4cCI6MTY1MDg4MzAzNX0.vp_7VNECJlSXDhc_HWZJfzrPcd4N3htzW-eZx7LJtk0"}}'
            const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
            global.fetch = jest.fn().mockImplementation(() => mockFetch);
           return signup(mockData).then((data) => {
             expect(data).toEqual(responseData);
           });
        });
    })
      describe('resetPasswordEmail', () => {

        it('sent reset password Email ', () => {
            const mockData= {
              email:'abc@email.com'
            }
            const responseData = {"response":"true","message":"Please check your e-mail, we have sent a password reset link to your registered email."}
            const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
            global.fetch = jest.fn().mockImplementation(() => mockFetch);
           return resetPasswordEmail(mockData).then((data) => {
             expect(data).toEqual(responseData);
           });
        });
    })
    describe('merchantSignup', () => {

      it('Successfully signUP ', () => {
          const mockData= {
            device_token : 'cXnDUPmrIEo:APA91bGO4Sa9TfpJOBRsoQfObBfWO-lzlsS4Cvg5FnpZBF1JuyuHv1YgaKW1UO31bpXPrBejA67HC2DdK_5UwIV5zSGn08Co3oXGu1p6TZIOGFzdSCcSITtLpplo2kV_sGs9qFsCStwA',
            device_type : 'andriod',
            roleId : '3',
            company_name : 'Txend'
          }
          const responseData = '{"statuscode":"200","response":"true","message":"User register successfully","data":{"id":"2160","company_name":"Txend","country_code":"92","mob_num":"0316456","email":"muh.hamza@txend.com","comp_reg_num":null,"tax_id":null,"profile_image":null,"qr_code":"gNphtuPe","signup_otp_status":"0","roleId":"4","businessId":null,"login_status":"1","account_status":"1","identity_img":null,"headshot_img":null},"token":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTA4ODMwMzUsImV4cCI6MTY1MDg4MzAzNX0.vp_7VNECJlSXDhc_HWZJfzrPcd4N3htzW-eZx7LJtk0"}}'
          const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
          global.fetch = jest.fn().mockImplementation(() => mockFetch);
         return MerchantSignUp(mockData).then((data) => {
           expect(data).toEqual(responseData);
         });
      });
  })
  describe('getUserdetails', () => {

    it('get user details', async () => {

        await AsyncStorage.setItem('userObj','{"id":1}')
        const responseData = '{"statuscode":"200","response":"true","message":"User register successfully","data":{"id":"2160","company_name":"Txend","country_code":"92","mob_num":"0316456","email":"muh.hamza@txend.com","comp_reg_num":null,"tax_id":null,"profile_image":null,"qr_code":"gNphtuPe","signup_otp_status":"0","roleId":"4","businessId":null,"login_status":"1","account_status":"1","identity_img":null,"headshot_img":null},"token":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTA4ODMwMzUsImV4cCI6MTY1MDg4MzAzNX0.vp_7VNECJlSXDhc_HWZJfzrPcd4N3htzW-eZx7LJtk0"}}'
        const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
        global.fetch = jest.fn().mockImplementation(() => mockFetch);
       return getUserDetails().then((data) => {
         expect(data).toEqual(responseData);
       });
    });
})
describe('getAllbanks', () => {

  it('get all banks', async () => {
      const responseData = '{"statuscode":"200","response":"true","message":"User register successfully","data":{"id":"2160","company_name":"Txend","country_code":"92","mob_num":"0316456","email":"muh.hamza@txend.com","comp_reg_num":null,"tax_id":null,"profile_image":null,"qr_code":"gNphtuPe","signup_otp_status":"0","roleId":"4","businessId":null,"login_status":"1","account_status":"1","identity_img":null,"headshot_img":null},"token":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTA4ODMwMzUsImV4cCI6MTY1MDg4MzAzNX0.vp_7VNECJlSXDhc_HWZJfzrPcd4N3htzW-eZx7LJtk0"}}'
      const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);
     return getAllBank().then((data) => {
       expect(data).toEqual(responseData);
     });
  });
})
describe('updateProfile', () => {

  it('update Profile', () => {
      const mockData= {
        device_token : 'cXnDUPmrIEo:APA91bGO4Sa9TfpJOBRsoQfObBfWO-lzlsS4Cvg5FnpZBF1JuyuHv1YgaKW1UO31bpXPrBejA67HC2DdK_5UwIV5zSGn08Co3oXGu1p6TZIOGFzdSCcSITtLpplo2kV_sGs9qFsCStwA',
        device_type : 'andriod',
        roleId : '4',
        company_name : 'Txend'
      }
      const responseData = '{"statuscode":"200","response":"true","message":"User register successfully","data":{"id":"2160","company_name":"Txend","country_code":"92","mob_num":"0316456","email":"muh.hamza@txend.com","comp_reg_num":null,"tax_id":null,"profile_image":null,"qr_code":"gNphtuPe","signup_otp_status":"0","roleId":"4","businessId":null,"login_status":"1","account_status":"1","identity_img":null,"headshot_img":null},"token":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTA4ODMwMzUsImV4cCI6MTY1MDg4MzAzNX0.vp_7VNECJlSXDhc_HWZJfzrPcd4N3htzW-eZx7LJtk0"}}'
      const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);
     return updateProfile(mockData).then((data) => {
       expect(data).toEqual(responseData);
     })
  });
})
describe('delte User Account', () => {
  
  it('Delete Account User', async() => {
    await AsyncStorage.setItem('userObj','{"id":1}')
      const mockData= {
        reason: 'test', email:'test@test.com', description:'test', password:'1111'
      }
      const responseData = '{"statuscode":"200","response":"true","message":"User register successfully","data":{"id":"2160","company_name":"Txend","country_code":"92","mob_num":"0316456","email":"muh.hamza@txend.com","comp_reg_num":null,"tax_id":null,"profile_image":null,"qr_code":"gNphtuPe","signup_otp_status":"0","roleId":"4","businessId":null,"login_status":"1","account_status":"1","identity_img":null,"headshot_img":null},"token":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTA4ODMwMzUsImV4cCI6MTY1MDg4MzAzNX0.vp_7VNECJlSXDhc_HWZJfzrPcd4N3htzW-eZx7LJtk0"}}'
      const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);
     return deleteUserAccount(mockData.reason,mockData.email, mockData.description,mockData.password).then((data) => {
       expect(data).toEqual(responseData);
     })
  });
})

describe('checkUserPinIsSet', () => {

  it('check User Pin I sSet', async () => {
    const mockData= {
      password: 'test', newPassword:'test@test.com'
    }
      await AsyncStorage.setItem('userObj','{"id":1}')
      const responseData = '{"statuscode":"200","response":"true","message":"User register successfully","data":{"id":"2160","company_name":"Txend","country_code":"92","mob_num":"0316456","email":"muh.hamza@txend.com","comp_reg_num":null,"tax_id":null,"profile_image":null,"qr_code":"gNphtuPe","signup_otp_status":"0","roleId":"4","businessId":null,"login_status":"1","account_status":"1","identity_img":null,"headshot_img":null},"token":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTA4ODMwMzUsImV4cCI6MTY1MDg4MzAzNX0.vp_7VNECJlSXDhc_HWZJfzrPcd4N3htzW-eZx7LJtk0"}}'
      const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);
     return checkUserPinIsSet(mockData).then((data) => {
       expect(data).toEqual(responseData);
     });
  });
})

describe('updateUserPassword', () => {

  it('update User Password', async () => {

      await AsyncStorage.setItem('userObj','{"id":1}')
      const responseData = '{"statuscode":"200","response":"true","message":"User register successfully","data":{"id":"2160","company_name":"Txend","country_code":"92","mob_num":"0316456","email":"muh.hamza@txend.com","comp_reg_num":null,"tax_id":null,"profile_image":null,"qr_code":"gNphtuPe","signup_otp_status":"0","roleId":"4","businessId":null,"login_status":"1","account_status":"1","identity_img":null,"headshot_img":null},"token":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTA4ODMwMzUsImV4cCI6MTY1MDg4MzAzNX0.vp_7VNECJlSXDhc_HWZJfzrPcd4N3htzW-eZx7LJtk0"}}'
      const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);
     return updateUserPassword().then((data) => {
       expect(data).toEqual(responseData);
     });
  });
})



describe('addUserPin', () => {

  it('addUserPin', async () => {

    //  await AsyncStorage.setItem('userObj','{"id":1}')
      const responseData = '{"statuscode":"200","response":"true","message":"Pin  added"}'
      const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);
     return addUserPin({id:'11',pin:'111',token:'11111111'}).then((data) => {
       expect(data).toEqual(responseData);
     });
  });
})
  });