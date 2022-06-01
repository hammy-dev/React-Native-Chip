import * as React from 'react';
import {
  View, Text, Image,
} from 'react-native';
import { connect } from 'react-redux';
import profile from '../../../assets/drawericon/profile.png';
import styles from './styles';
import AUX from '../../../components/AUX-';
import { changeToken, setUser } from '../../../redux/actions/index';
import ChipButton from '../../../components/buttons/index';
/* eslint react/no-unstable-nested-components:0 */
function Profile({ navigation, userInfo }) {
  return (
    <AUX>
      <View style={styles.profileContainer}>
        <View style={styles.imgBorder}>
          <View style={styles.imgInnerBorder}>
            <Image
              source={userInfo.profile_image ? userInfo.profile_image : profile}
              style={styles.img}
            />
          </View>
        </View>
        <View style={{
          ...styles.innerContainer,
        }}
        >
          <View style={{ ...styles.textContainer }}>
            <Text style={styles.userName}>{userInfo.username}</Text>
            <View style={{ ...styles.hrContainer }}>
              <View style={{
                ...styles.hrOneStyle,
              }}
              />
              <View style={{
                ...styles.hrTwoStyle,
              }}
              />
            </View>

            <Text style={styles.userEmail}>{userInfo.email}</Text>

            <Text style={styles.usersNumber}>{`+${userInfo.country_code} ${userInfo.mob_num}`}</Text>
          </View>

        </View>
        <View style={styles.CreateAccount}>
          <ChipButton
            text="Edit Profile"
            customStyle={styles.Createbutton}
            customText={styles.CreateAccountText}
            testID="button"
            onPress={() => { navigation.navigate('editProfile'); }}
          />
        </View>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
