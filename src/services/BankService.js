import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_API_URL } from '../constants/constants';

module.exports = {
  BankList: () => {
    const form = new FormData();
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
};
