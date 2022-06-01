import {
  Text, View, Image, TextInput, Alert,
} from 'react-native';
import { useState } from 'react';
import styles from './style';
import Card from '../../components/Cards';
import AUX from '../../components/AUX-/index';
import Chipbutton from '../../components/buttons';
/* eslint import/named:0 */
import { checkemailexist, resetPasswordEmail } from '../../services/UserService';
import image from '../../../assets/Chip-Logo.png';

function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');

  const checkEmail = (emailCheck) => {
    checkemailexist(emailCheck)
      .then((res) => {
        if (res.response === 'True') {
          resetPasswordEmail(emailCheck)
            .then(() => { navigation.navigate('Login'); })
            .catch(() => {});
        } else {
          Alert.alert(res.message);
        }
      })
      .catch(() => {});
  };
  return (
    <AUX>
      <View style={styles.mainContanier}>
        <View style={styles.innerContainer}>
          <View style={styles.chipImage}>
            <Image style={styles.tinyLogo} source={image} />
          </View>
          <View>
            <Text style={styles.imageText}>
              Forgot Password?
            </Text>
            <View style={styles.RegisterdEmail}>
              <Text style={styles.detailsText}>
                Please enter your registered email address
              </Text>
            </View>
          </View>
          <View style={{ ...styles.cardMainContainer }}>

            <View style={styles.LoginCard}>
              <Card>
                <TextInput
                  style={styles.emailInput}
                  placeholder="Email Address"
                  onChangeText={(e) => {
                    setEmail(e);
                  }}
                />
              </Card>
            </View>
            <View style={styles.button}>
              <Chipbutton text="Reset Password" customStyle={styles.Createbutton} customText={styles.CreateAccountText} testID="button" onPress={() => { checkEmail(email); }} />
            </View>
          </View>
        </View>

      </View>
    </AUX>
  );
}

export default ForgotPassword;
