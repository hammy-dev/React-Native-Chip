import { useEffect, useState } from 'react';
import {
  View, Text, Image, Linking, TouchableOpacity, RefreshControl,
} from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import profile from '../../assets/drawericon/profile.png';
import groupicon from '../../assets/drawericon/groupicon.png';
import logout from '../../assets/drawericon/logout.png';
import fb from '../../assets/drawericon/fb.png';
import instagram from '../../assets/drawericon/instagram.png';
import { changeToken, setUser } from '../../redux/actions/index';
import styles from './styles';
import { getUserDetails } from '../../services/UserService';
/* eslint react/no-unstable-nested-components:0 */
function CustomDrawer({
  updateUserToken, userInfo, getUserInfo, ...props
}) {
  const [refreshing, setRefreshing] = useState(true);
  const RemoveUserToken = async () => {
    updateUserToken(false);
    await AsyncStorage.removeItem('token');
  };

  useEffect(() => {
    getUser();
  }, []);
  const getUser = () => {
    getUserDetails().then((res) => {
      if (res.response === 'true') {
        setUser(res.data);
        setRefreshing(false);
        getUserInfo(res.data);
      } else {
        setTimeout(() => {
        }, 7000);
      }
    });
  };
  const onRefresh = () => {
    getUser();
  };
  return (
    <DrawerContentScrollView
      {...props}
      refreshControl={(
        <RefreshControl
          // refresh control used for the Pull to Refresh
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      )}
    >
      <TouchableOpacity onPress={() => { props.navigation.closeDrawer(); props.navigation.navigate('Profile'); }}>
        <View style={styles.profileContainer}>
          <View style={styles.imgBorder}>
            <View style={styles.imgInnerBorder}>
              <Image
                source={userInfo.profile_image ? userInfo.profile_image : profile}
                style={styles.img}
              />
            </View>
          </View>
          <View>
            <Text style={styles.userName}>{userInfo.username}</Text>
            <Text style={styles.userEmail}>{userInfo.email}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.balanceContainer}>
        <Text style={styles.balance}>Naf 0.00</Text>
        <View style={styles.share}>
          <Image source={groupicon} style={styles.imggroup} />
          <Text style={styles.tellfriend}>Tell a Friend</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          onPress={() => { RemoveUserToken(); }}
          icon={() => <Image source={logout} style={styles.imggroup} />}
          labelStyle={styles.label}

        />
        <View style={styles.sperator} />

        <View style={styles.social}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => { Linking.openURL('https://www.instagram.com/chipcuracao/'); }}>
            <Image source={instagram} style={styles.fb} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => { Linking.openURL('https://www.facebook.com/ChipCuracao/'); }}>
            <Image source={fb} style={styles.instagram} />
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>

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

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
