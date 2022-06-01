import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_API_URL } from '../constants/constants';

module.exports = {

  /* getRecentContact Service Forgot Password */

  getRecentContact: async () => {
    const userObj = await AsyncStorage.getItem('userObj');

    const { id } = JSON.parse(userObj);
    const form = new FormData();
    form.append('user_id', `${id}`);
    try {
      return new Promise(async (resp, rej) => {
        const token = await AsyncStorage.getItem('token');
        fetch(`${BASE_API_URL}/transaction/getRecentTransactionFriend`, {
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
          .catch((e) => rej(e));
      });
    } catch (error) {
      return error;
    }
  },
  getAvailableBalance: async () => {
    const userObj = await AsyncStorage.getItem('userObj');

    const { id } = JSON.parse(userObj);

    const form = new FormData();
    form.append('user_id', `${id}`);
    try {
      return new Promise(async (resp, rej) => {
        const token = await AsyncStorage.getItem('token');
        fetch(`${BASE_API_URL}/transaction/getwalletbal`, {
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
          .catch((e) => rej(e));
      });
    } catch (error) {
      return error;
    }
  },
  completedPayments: async () => {
    const userObj = await AsyncStorage.getItem('userObj');

    const { id } = JSON.parse(userObj);

    const form = new FormData();
    form.append('user_id', `${id}`);
    try {
      return new Promise(async (resp, rej) => {
        const token = await AsyncStorage.getItem('token');
        fetch(`${BASE_API_URL}/transaction/userTransaction`, {
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
          .catch((e) => rej(e));
      });
    } catch (error) {
      return error;
    }
  },
  pendingPayments: async () => {
    const userObj = await AsyncStorage.getItem('userObj');

    const { id } = JSON.parse(userObj);

    const form = new FormData();
    form.append('user_id', `${id}`);
    try {
      return new Promise(async (resp, rej) => {
        const token = await AsyncStorage.getItem('token');
        fetch(`${BASE_API_URL}/transaction/pendingRequest`, {
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
          .catch((e) => rej(e));
      });
    } catch (error) {
      return error;
    }
  },
  FoundTransfer: (data) => {
    const form = new FormData();

    form.append('user_id', '2187');
    form.append('receiver_id', `${data.receiver_id}`);
    form.append('amount', `${data.amount}`);
    form.append('desc', `${data.desc}`);
    form.append('type', 'Transfer');
    form.append('sendername', 'Rakhshan Mughal');

    try {
      return new Promise(async (resp, rej) => {
        const token = await AsyncStorage.getItem('token');
        fetch(`${BASE_API_URL}/transaction/transferFoundToWallet`, {
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
          .catch((e) => rej(e));
      });
    } catch (error) {
      return error;
    }
  },

  /* Get User Friend Service */

  getUserFriend: (data) => new Promise(async (res, rej) => {
    try {
      const formData = new FormData();

      formData.append('mobile_data', JSON.stringify(data));

      const token = await AsyncStorage.getItem('token');
      const config = {
        headers: {
          Token: `${token}`,
        },
        method: 'POST',
        body: formData,
      };

      fetch(
        `${BASE_API_URL}/transaction/getUserFriend`,
        config,
      )
        .then((response) => response.json())
        .then((resData) => {
          res(resData);
        });
      // .catch(() =>);
    } catch (e) {
      rej(e);
    }
  }),

  requestMoney: (data) => new Promise(async (res, rej) => {
    try {
      const formData = new FormData();
      formData.append('sender_id', `${data.sender_id}`);
      formData.append('phoneno', `${data.phoneNo}`);
      formData.append('receiver_id', `${data.receiver_id}`);
      formData.append('amount', `${data.amount}`);
      formData.append('description', `${data.desc}`);
      formData.append('type', 'Request');
      formData.append('sendername', `${data.senderName}`);
      formData.append('receiver_name', `${data.receiver_name}`);
      formData.append('photo', `${data.photo}`);
      const token = await AsyncStorage.getItem('token');
      const config = {
        headers: {
          Token: `${token}`,
        },
        method: 'POST',
        body: formData,
      };
      fetch(
        `${BASE_API_URL}/transaction/requestmoney`,
        config,
      )
        .then((response) => response.json())
        .then((resData) => {
          res(resData);
        });
      // .catch(() =>);
    } catch (e) {
      rej(e);
    }
  }),
};
