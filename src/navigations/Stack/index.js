/* React Imports */

import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import Colors from '../../constants/Colors';

/* Screens */

import SignUp from '../../screens/SignUp';
import Login from '../../screens/Login';
import OTP from '../../screens/otp';
import MarchantSignUpOne from '../../screens/marchantSignUpOne/index';
import MarchantSignUpTwo from '../../screens/marchantSignUpTwo/index';
import InstructionID from '../../screens/InstructionID';
import UploadDoc from '../../screens/uploadDocs';
import { changeToken } from '../../redux/actions/index';
import Request from '../../screens/Request/index';
import GenerateQrRequest from '../../screens/Request/GenerateRequestQR/index';
import CreatePin from '../../screens/Pin/CreatePin/index';
// User SignUP Screens
import UserSignUp1 from '../../screens/SignUp/UserSignUp1/index';
import UserSignUp2 from '../../screens/SignUp/UserSignUp2/index';
import UserSignUp4 from '../../screens/SignUp/UserSignUp4/index';
import UserSignUp5 from '../../screens/SignUp/UserSignUp5/index';
import UserSignUp6 from '../../screens/SignUp/UserSignUp6/index';
import ForgotPassword from '../../screens/ForgotPassword/index';
import ChipDrawer from '../Drawer';
import PayScreen from '../../screens/pay';
import AddMoney from '../../screens/AddMoney';
import GeneratedQR from '../../screens/Request/GeneratedQR';
import Profile from '../../screens/DrawerScreens/Profile';
import AmountDetail from '../../screens/AmountDetails/index';
import FriendRequest from '../../screens/Request/FriendRequest';
import TopUpMethod from '../../screens/TopUp/index';
import TermsAndConditions from '../../screens/DrawerScreens/Terms&Conditions';
import PrivacyPolicy from '../../screens/DrawerScreens/PrivacyPolicy';
import ContactUs from '../../screens/DrawerScreens/ContactUs';
import Faqs from '../../screens/DrawerScreens/FAQs';
import ChangePassword from '../../screens/DrawerScreens/ChangePassword';
import AddBankAccount from '../../screens/CashOut/AddBankAccount/index';
import CashOut from '../../screens/CashOut/index';
import DeleteAccount from '../../screens/DrawerScreens/DeleteAccount';
import DeleteAccountFeedback from '../../screens/DrawerScreens/DeleteAccountFeedback';
import DeleteAccountLast from '../../screens/DrawerScreens/DeleteAccountLast';
import EditProfile from '../../screens/DrawerScreens/EditProfile';
import MerchantBusinessInfo from '../../screens/MerchantBusinessInfo/index';
import SignDoc from '../../screens/sign';
import SelectedPayment from '../../screens/DrawerScreens/selectedPaymentScreen/index';
import Pin from '../../screens/Pin';
import BankWebview from '../../screens/BankWebview';
// Component
const prefix = Linking.makeUrl('/');
const Stack = createStackNavigator();
const MyTheme = { ...DefaultTheme, ...Colors };

function MainStack({ userToken, updateUserToken }) {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Request: 'Request',
      },
    },
  };
  useEffect(async () => {
    const token = await AsyncStorage.getItem('token');
    updateUserToken(token);
  }, []);
  return (
    <NavigationContainer theme={MyTheme} linking={linking}>
      <Stack.Navigator initialRouteName="ChipDrawer">
        {!userToken ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ cardStyle: { backgroundColor: '#f0eefc' }, headerShown: false }}
            />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen
              name="InstructionID"
              component={InstructionID}
              options={{
                title: '',
                headerStyle: { backgroundColor: Colors.white },
                headerTintColor: Colors.header,
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="UploadDoc"
              component={UploadDoc}
              options={{
                title: '',
                headerStyle: { backgroundColor: Colors.white },
                headerTintColor: Colors.header,
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="SignDoc"
              component={SignDoc}
              options={{
                title: '',
                headerStyle: { backgroundColor: Colors.white },
                headerTintColor: Colors.header,
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
            <Stack.Screen
              name="MarchantSignUpTwo"
              component={MarchantSignUpTwo}
              options={{
                title: 'CREATE AN ACCOUNT ',
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
              }}

            />
            <Stack.Screen
              name="UserSignUp1"
              component={UserSignUp1}
              options={{
                title: 'LETS GET STARTED',
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="MerchantBusinessInfo"
              component={MerchantBusinessInfo}
              options={{
                title: 'BUSINESS TYPE LIST',
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="MarchantSignUpOne"
              component={MarchantSignUpOne}
              options={{
                title: 'CREATE AN ACCOUNT',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: Colors.header },
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="UserSignUp2"
              component={UserSignUp2}
              options={{
                title: 'CREATE AN ACCOUNT',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: Colors.header },
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="UserSignUp4"
              component={UserSignUp4}
              options={{
                title: 'CREATE AN ACCOUNT',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: Colors.header },
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="UserSignUp5"
              component={UserSignUp5}
              options={{
                title: '',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#fff' },
                headerTintColor: Colors.header,

              }}
            />
            <Stack.Screen name="UserSignUp6" component={UserSignUp6} options={{ title: '', headerStyle: { backgroundColor: 'white' } }} />
            <Stack.Screen
              name="OTP"
              component={OTP}
              options={{
                title: 'VERIFY PHONE NUMBER',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="CreatePin"
              component={CreatePin}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="PIN"
              component={Pin}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="ChipDrawer"
              component={ChipDrawer}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                title: 'PROFILE',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="PayScreen"
              component={PayScreen}
              options={{
                title: 'PAY',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="Request"
              component={Request}
              options={{
                title: 'REQUEST',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="RequestQR"
              component={GenerateQrRequest}
              options={{
                title: 'GENERATE QR CODE',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="GeneratedQR"
              component={GeneratedQR}
              options={{
                title: 'GENERATED QR CODE',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="AddMoney"
              component={AddMoney}
              options={{
                title: 'Add Money',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="TopUpMethod"
              component={TopUpMethod}
              options={{
                title: 'Top Up Methods',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="AmountDetail"
              component={AmountDetail}
              options={{
                title: 'PAY',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="TermsAndConditions"
              component={TermsAndConditions}
              options={{
                title: 'TERMS & CONDITIONS',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="FriendRequest"
              component={FriendRequest}
              options={{
                title: 'REQUEST',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />

            <Stack.Screen
              name="privacyPolicy"
              component={PrivacyPolicy}
              options={{
                title: 'PRIVACY POLICY',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />

            <Stack.Screen
              name="contactUs"
              component={ContactUs}
              options={{
                title: 'CONTACT US',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />

            <Stack.Screen
              name="faqs"
              component={Faqs}
              options={{
                title: 'FAQS',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />

            <Stack.Screen
              name="changePassword"
              component={ChangePassword}
              options={{
                title: 'CHANGE PASSWORD',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="deleteAccount"
              component={DeleteAccount}
              options={{
                title: 'DELETE PROFILE',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="AddBankAccount"
              component={AddBankAccount}
              options={{
                title: 'ADD BANK ACCOUNT',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="deleteAccountFeedback"
              component={DeleteAccountFeedback}
              options={{
                title: 'DELETE PROFILE',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="CashOut"
              component={CashOut}
              options={{
                title: 'CASH OUT',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="deleteAccountLast"
              component={DeleteAccountLast}
              options={{
                title: 'DELETE PROFILE',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="editProfile"
              component={EditProfile}
              options={{
                title: 'EDIT PROFILE',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="selectedPayment"
              component={SelectedPayment}
              options={{
                title: '',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="BankWebview"
              component={BankWebview}
              options={{
                title: 'ADD MONEY WITH BANK',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: Colors.header },
                headerTintColor: '#fff',
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => ({
  userToken: state.userToken,
});
const mapDispatchToProps = (dispatch) => ({
  updateUserToken: (value) => dispatch(changeToken(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainStack);
