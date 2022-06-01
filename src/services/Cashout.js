import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_API_URL } from '../constants/constants';
// import data from '../screens/Home/data';

// const axios = require('axios');

module.exports = {
  getAllBank: () => {
    try {
      return new Promise(async (resp, rej) => {
        const token = await AsyncStorage.getItem('token');
        fetch(`${BASE_API_URL}/cashout/getBankList`, {
          headers: {
            Token: `${token}`,
          },
          method: 'POST',
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
  getBanksByUser: (userId) => {
    const form = new FormData();

    form.append('user_id', userId);
    try {
      return new Promise(async (resp, rej) => {
        const token = await AsyncStorage.getItem('token');
        fetch(`${BASE_API_URL}/cashout/getAllBankDetails`, {
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
  addBankdetails: (data) => {
    try {
      const form = new FormData();

      form.append('user_id', data.userId);
      form.append('bank_name', data.bankName);
      form.append('amount', data.amount);
      form.append('account_num', data.accountNum);
      form.append('address', data.address);
      return new Promise(async (resp, rej) => {
        const token = await AsyncStorage.getItem('token');
        fetch(`${BASE_API_URL}/cashout/addbankdetails`, {
          headers: {
            Token: `${token}`,
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
  addBank: (data) => {
    try {
      const form = new FormData();

      form.append('user_id', data.userId);
      form.append('bank_name', data.bankName);
      form.append('amount', data.amount);
      form.append('account_num', data.accountNum);
      form.append('address', data.address);
      return new Promise(async (resp, rej) => {
        const token = await AsyncStorage.getItem('token');
        fetch(`${BASE_API_URL}/cashout/addBankDetailsByUser`, {
          headers: {
            Token: `${token}`,
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
  cashOutHistory: async () => {
    const userObj = await AsyncStorage.getItem('userObj');

    const { id } = JSON.parse(userObj);

    const form = new FormData();
    form.append('userid', `${id}`);
    try {
      return new Promise(async (resp, rej) => {
        const token = await AsyncStorage.getItem('token');
        fetch(`${BASE_API_URL}/cashout/getUserSuccessCashTransfer`, {
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
};
