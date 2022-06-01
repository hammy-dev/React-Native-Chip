import React, { useState } from 'react';
import {
  View, Text, Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { connect } from 'react-redux';
import Loader from 'react-native-modal-loader';
import profile from '../../../assets/drawericon/profile.png';
import styles from './styles';
import AUX from '../../../components/AUX-';
import { changeToken, setUser } from '../../../redux/actions/index';
import ChipButton from '../../../components/buttons/index';
import SimpleInput from '../../../components/Input/Input';
import { updateProfile } from '../../../services/UserService';
import ChipPaymentModal from '../../../components/paymentModal';

/* eslint react/no-unstable-nested-components:0 */
function EditProfile({ userInfo, getUserInfo }) {
  const [userName, setFullName] = useState(userInfo.username);
  const [mobNum, setMobileNumber] = useState(userInfo.country_code + userInfo.mob_num);
  const [dob, setBirthday] = useState(userInfo.dob);
  const [idNum, setIdNum] = useState(userInfo.id_num);
  const [spinner, setSpinner] = useState(false);
  const [visible, setVisible] = useState(false);
  // business_name: userObj.business_name,
  // comp_reg_num : userObj.comp_reg_num,
  // country_code: userObj.country_code,
  // dob,
  // email:userObj.email,
  // id_num: idNum,
  // last_name:
  const Update = () => {
    setSpinner(true);
    updateProfile(userName, idNum, dob, mobNum).then((res) => {
      if (res.response === 'true') {
        setVisible(true);
        setSpinner(false);
        getUserInfo({
          ...userInfo,
          username: userName,
          id_num: idNum,
          dob,
          mob_num: mobNum,
        });
      } else {
        setTimeout(() => {
        }, 7000);
      }
    });
  };
  return (
    <AUX>
      <Loader opacity={0.8} loading={spinner} size="small" color="black" />
      <KeyboardAwareScrollView>
        <View style={styles.profileContainer}>
          <View style={styles.imgBorder}>
            <View style={styles.imgInnerBorder}>
              <Image source={profile} style={styles.img} />
            </View>
          </View>
          <View style={{
            ...styles.innerContainer,
          }}
          >
            <View style={styles.NameContainer}>
              <Text style={styles.Name}>Full Name</Text>
              <SimpleInput editable={false} style={styles.input} title="username" defaultValue={userInfo.username} onChangeText={setFullName} />
              <Text style={styles.Name}>Email</Text>
              <SimpleInput editable={false} style={styles.input} title="john@gmail.com" defaultValue={userInfo.email} />
              <Text style={styles.Name}>Mobile Number</Text>
              <SimpleInput editable={false} style={styles.input} title="+5999*******" defaultValue={`+${userInfo.country_code + userInfo.mob_num}`} onChangeText={setMobileNumber} />
              <Text style={styles.Name}>Birthday</Text>
              <SimpleInput editable={false} style={styles.input} title="date of birth" defaultValue={userInfo.dob} onChangeText={setBirthday} />
              <Text style={styles.Name}>ID Number</Text>
              <SimpleInput editable={false} style={styles.input} title="0000000000" defaultValue={userInfo.id_num} onChangeText={setIdNum} />
            </View>
          </View>
          <View style={styles.CreateAccount}>
            <ChipButton
              text="Save"
              customStyle={styles.Createbutton}
              customText={styles.CreateAccountText}
              testID="button"
              onPress={() => { Update(); }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      {visible && <ChipPaymentModal heading="Profile Update" image message="Your Profile Updated Successfully" onBackdropPress={() => { setVisible(false); }} />}
    </AUX>
  );
}
const mapStateToProps = (state) => ({
  userToken: state.userToken,
  userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserToken: (value) => dispatch(changeToken(value)),
  getUserInfo: (value) => dispatch(setUser(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
