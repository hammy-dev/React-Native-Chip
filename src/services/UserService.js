import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_API_URL, BASE_URL } from '../constants/constants';
// import data from '../screens/Home/data';

// const axios = require('axios');

module.exports = {

  /* Login User Service */

  Login: (data) => {
    const form = new FormData();

    form.append('country_code', `${data.countrycode}`);

    form.append('mob_num', `${data.phoneNo}`);

    form.append('password', `${data.password}`);

    form.append('device_token', `${data.deviceToken}`);

    form.append('device_type', `${data.deviceType}`);

    console.log('Form Data ', form);

    try {
      return new Promise((resp, rej) => {
        fetch(`${BASE_API_URL}/user/login`, {
          method: 'POST',
          body: form,

        })

          .then((r) => r.json())
          .then(async (respData) => {
            resp(respData);
            await AsyncStorage.setItem('userObj', JSON.stringify(respData.data));
            await AsyncStorage.setItem('token', respData.token.token);
          })

          .catch((e) => rej(e));
      });
    } catch (error) {
      return error;
    }
  },
  otp: (data) => {
    try {
      const formData = new FormData();

      formData.append('country_code', `+${data.country_code}`);
      formData.append('phoneNumber', `+${data.country_code}${data.mob_num}`);
      return new Promise((res) => {
        fetch(`${BASE_API_URL}/user/verifyphonenumber`, {
          method: 'POST',
          body: formData,
        }).then((response) => response.json())
          .then((resData) => {
            res(resData);
          });
      });
    } catch (e) { return e; }
  },
  otpVerify: (mobileNumber, countrycode, code) => {
    try {
      const dynamicUrl = 'otpVerification';
      // otpVerification?phoneNumber=34344656846&country_code=+92&otp=8903

      const formData = new FormData();
      formData.append('country_code', `+${countrycode}`);
      formData.append('phoneNumber', `+${countrycode}${mobileNumber}`);
      formData.append('otp', code);
      return new Promise((res) => {
        fetch(`${BASE_API_URL}/user/${dynamicUrl}`, {
          method: 'POST',
          body: formData,
        }).then((response) => response.json())
          .then((data) => {
            res(data);
          });
      });
    } catch (e) {
      return e;
    }
  },

  /* signup User Service */

  signup: (data, deviceToken, deviceType) => {
    //  console.log('Orignal Data==>', data,"asdfklshf",device_token);
    try {
      const formData = new FormData();
      return new Promise((resp, rej) => {
        data.device_type = deviceType;
        data.roleId = '3';
        data.device_token = deviceToken;
        data.last_name = deviceToken;
        for (const [key, value] of Object.entries(data)) {
          formData.append(key, value);
        }
        fetch(`${BASE_API_URL}/user/signup`, {
          method: 'POST',
          body: formData,
        })
          .then((response) => response.json())
          .then((respData) => {
            resp(respData);
          }).catch((e) => {
            rej(e);
          });
      });
    } catch (error) {
      return error;
    }
  },
  /* signup User Service */

  MerchantSignUp: (data, deviceToken) => {
    try {
      const formData = new FormData();
      return new Promise((resp, rej) => {
        // formData.append('first_name', ``);
        // formData.append('last_name', ``);
        formData.append('company_name', `${data.company_name}`);
        formData.append('country_code', `${data.country_code}`);
        formData.append('mob_num', `${data.mob_num}`);
        formData.append('password', `${data.password}`);
        formData.append('email_id', `${data.email_id}`);
        formData.append('roleId', `${data.roleId}`);
        formData.append('device_token', deviceToken);
        formData.append('device_type', 'android');
        fetch(`${BASE_API_URL}/user/signup`, {
          method: 'POST',
          body: formData,
        })
          .then((response) => response.json())
          .then((respData) => {
            resp(respData);
          }).catch((e) => {
            rej(e);
          });
      });
    } catch (error) {
      return error;
    }
  },

  /* checkemailexist Service Forgot Password */

  checkemailexist: (email) => {
    const form = new FormData();
    form.append('email', email);

    try {
      return new Promise((resp, rej) => {
        fetch(`${BASE_API_URL}/user/checkemailexist`, {
          method: 'POST',
          body: form,
        })
          .then((r) => r.json())
          .then((data) => {
            resp(data);
          })
          .catch((e) => rej(e));
      });
    } catch (error) {
      return error;
    }
  },
  /* resetPasswordEmail Service */

  resetPasswordEmail: (email) => {
    const form = new FormData();
    form.append('email', email);

    try {
      return new Promise((resp, rej) => {
        fetch(`${BASE_URL}/forgot/userAccount.php`, {
          method: 'POST',
          body: form,
        })
          .then((r) => r.json())
          .then((data) => {
            resp(data);
          })
          .catch((e) => rej(e));
      });
    } catch (error) {
      return error;
    }
  },
  getAllBank: () => {
    try {
      return new Promise((resp, rej) => {
        fetch(`${BASE_API_URL}/cashout/getBankList`, {
          method: 'POST',
        })
          .then((r) => r.json())
          .then((data) => {
            resp(data);
          })
          .catch((e) => rej(e));
      });
    } catch (error) {
      return error;
    }
  },

  /* Login User Service */
  getUserDetails: async (userId) => {
    try {
      if (!userId) {
        const userObj = await AsyncStorage.getItem('userObj');
        const { id } = JSON.parse(userObj);
        userId = id;
      }
      return new Promise(async (resp, rej) => {
        const token = await AsyncStorage.getItem('token');
        fetch(`${BASE_API_URL}/user/getuserdetails?user_id=${userId}`, {
          headers: {
            Token: `${token}`,
          },
          method: 'GET',
        })
          .then((r) => r.json())
          .then((data) => {
            resp(data);
          })
          .catch((e) => {
            rej(e);
          });
      });
    } catch (error) {
      return error;
    }
  },
  addUserPin: async (data) => {
    const form = new FormData();
    form.append('userid', data.id);
    form.append('pin', data.pin);
    try {
      return new Promise(async (resp, rej) => {
        fetch(`${BASE_API_URL}/user/addUserPin`, {
          headers: {
            Token: `${data.token}`,
          },
          method: 'POST',
          body: form,
        })
          .then((r) => r.json())
          .then((respData) => {
            resp(respData);
          })
          .catch((e) => {
            rej(e);
          });
      });
    } catch (error) {
      return error;
    }
  },
  checkUserPinIsSet: async () => {
    const form = new FormData();
    const userObj = await AsyncStorage.getItem('userObj');

    const { id } = JSON.parse(userObj);
    form.append('userid', id);
    try {
      return new Promise(async (resp, rej) => {
        const token = await AsyncStorage.getItem('token');
        fetch(`${BASE_API_URL}/user/checkUserPinIsSet`, {
          headers: {
            Token: `${token}`,
          },
          method: 'POST',
          body: form,
        })
          .then((r) => r.json())
          .then((data) => {
            resp(data);
          })
          .catch((e) => {
            rej(e);
          });
      });
    } catch (error) {
      return error;
    }
  },
  updateProfile: async (userName, idNum, dob, mobNum, lastName) => {
    const userObj = await AsyncStorage.getItem('userObj');

    const { id } = JSON.parse(userObj);
    const form = new FormData();
    form.append('username', `${userName}`);

    form.append('id', `${id}`);

    form.append('id_num', `${idNum}`);
    if (lastName !== null || lastName !== '') {
      form.append('last_name', `${lastName}`);
    }
    form.append('dob', `${dob}`);
    form.append('mob_num', `${mobNum}`);

    try {
      return new Promise(async (resp, rej) => {
        const token = await AsyncStorage.getItem('token');
        fetch(`${BASE_API_URL}/user/updateProfile`, {
          headers: {
            Token: `${token}`,
          },
          method: 'POST',
          body: form,
        })
          .then((r) => r.json())
          .then((resData) => {
            resp(resData);
          })
          .catch((e) => {
            rej(e);
          });
      });
    } catch (error) {
      return error;
    }
  },
  deleteUserAccount: async (reason, email, description, password) => {
    const userObj = await AsyncStorage.getItem('userObj');

    const { id } = JSON.parse(userObj);
    const form = new FormData();
    form.append('userid', `${id}`);

    form.append('reason', `${reason}`);

    form.append('email', `${email}`);

    form.append('description', `${description}`);
    form.append('password', `${password}`);

    try {
      return new Promise(async (resp, rej) => {
        const token = await AsyncStorage.getItem('token');
        fetch(`${BASE_API_URL}/user/deleteUserProfile`, {
          headers: {
            Token: `${token}`,
          },
          method: 'POST',
          body: form,
        })
          .then((r) => r.json())
          .then((resData) => {
            resp(resData);
          })
          .catch((e) => {
            rej(e);
          });
      });
    } catch (error) {
      return error;
    }
  },
  updateUserPassword: async (password, newPassword) => {
    const userObj = await AsyncStorage.getItem('userObj');

    const { id } = JSON.parse(userObj);
    const form = new FormData();
    form.append('id', `${id}`);
    form.append('password', `${password}`);
    form.append('newpassword', `${newPassword}`);

    try {
      return new Promise(async (resp, rej) => {
        const token = await AsyncStorage.getItem('token');
        fetch(`${BASE_API_URL}/user/ChangePassword`, {
          headers: {
            Token: `${token}`,
          },
          method: 'POST',
          body: form,
        })
          .then((r) => r.json())
          .then((resData) => {
            resp(resData);
          })
          .catch((e) => {
            rej(e);
          });
      });
    } catch (error) {
      return error;
    }
  },
};
