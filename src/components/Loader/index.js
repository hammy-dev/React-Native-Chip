import { useState, useEffect } from 'react';
import Modal from 'react-native-modal';
import { ActivityIndicator, View } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage'
import Colors from '../../constants/Colors';
import styles from './styles';

function Loader({ navigation }) {
  const [token, setToken] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTA4Njg2NTAsImV4cCI6MTY1MDg2ODY1MH0.hU4ExppLg2lOtUk4XfnaI2awzhAtJ2hllEH2hz0PzKk');

  useEffect(async () => {
    const userToken = token;
    // const userToken = await AsyncStorage.getItem('token')
    if (userToken) { setToken(userToken); }
  }, []);

  return (
    <View>

      {token ? (
        <Modal isVisible style={styles.modal}>
          <View>
            <ActivityIndicator size="large" color={Colors.textColor} />
          </View>
        </Modal>
      )
        : navigation.navigate('SignUp')}

    </View>
  );
}
export default Loader;
