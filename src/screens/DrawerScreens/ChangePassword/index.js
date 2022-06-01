import {
  View, Alert,
} from 'react-native';
import { useState } from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from 'react-native-modal-loader';
import styles from './styles';
import Card from '../../../components/Cards';
import AUX from '../../../components/AUX-/index';
import Chipbutton from '../../../components/buttons';
import PasswordInput from '../../../components/Login/PasswordInput';
import { changeToken } from '../../../redux/actions/index';
import { updateUserPassword } from '../../../services/UserService';
import ChipPaymentModal from '../../../components/paymentModal';

function ChangePassword({ updateUserToken }) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const updatePassword = () => {
    setLoading(true);
    if (newPassword !== confirmPassword) {
      Alert.alert('Chip', 'Confirm Password doesnt match', ['OK']);
      setLoading(false);
    } else {
      updateUserPassword(oldPassword, newPassword).then((res) => {
        if (res.response === 'true') {
          setVisible(true);
          setTimeout(() => {
            setLoading(false);
            setVisible(false);
            RemoveUserToken();
          }, 2000);
        } else {
          setLoading(false);
          Alert.alert('Password', res.message, ['OK']);
        }
      });
    }
  };
  const RemoveUserToken = async () => {
    updateUserToken(false);
    await AsyncStorage.removeItem('token');
  };
  return (
    <AUX>
      <Loader opacity={0.8} loading={loading} size="small" color="black" />
      <View style={styles.mainContanier}>
        <View style={styles.innerContainer}>
          <View style={{ ...styles.cardMainContainer }}>

            <View style={styles.LoginCard}>
              <Card style={styles.cardContainer}>
                <PasswordInput
                  testID="current"
                  title="Current Password"
                  value={oldPassword}
                  autoCapitalize="none"
                  onChangeText={(pass) => setOldPassword(pass)}
                />
                <PasswordInput
                  testID="new"
                  title="New Password"
                  value={newPassword}
                  autoCapitalize="none"
                  onChangeText={(pass) => setNewPassword(pass)}
                />
                <View style={styles.cardHeightHandler}>
                  <PasswordInput
                    testID="re-enter"
                    title="Re-enter Password"
                    value={confirmPassword}
                    autoCapitalize="none"
                    onChangeText={(pass) => setConfirmPassword(pass)}
                  />
                </View>
              </Card>
            </View>
            <View style={styles.button}>
              <Chipbutton text="Save" customStyle={styles.Createbutton} customText={styles.CreateAccountText} onPress={() => { updatePassword(); }} testID="button" />
            </View>
          </View>
        </View>

      </View>
      {visible && <ChipPaymentModal heading="Your Password is Updated Successfully!" image message=" Please Login again" onBackdropPress={() => { setVisible(false); }} />}
    </AUX>
  );
}
const mapStateToProps = (state) => ({
  userToken: state.userToken,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserToken: (value) => dispatch(changeToken(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
