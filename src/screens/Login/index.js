import { Text, View, Image } from 'react-native';
import styles from './style';
import LoginCard from '../../components/Login/LoginCard';
import AUX from '../../components/AUX-/index';
import image from '../../../assets/Chip-Logo.png';

function Login({ navigation }) {
  return (
    <AUX>
      <View style={styles.mainContanier}>
        <View style={styles.innerContainer}>
          <View style={styles.chipImage}>
            <Image style={styles.tinyLogo} source={image} />
          </View>
          <View>
            <Text style={styles.imageText}>
              Login
            </Text>
          </View>
          <View style={styles.LoginCard}>
            <LoginCard navigation={navigation} />
          </View>
        </View>
      </View>
    </AUX>
  );
}
export default Login;
