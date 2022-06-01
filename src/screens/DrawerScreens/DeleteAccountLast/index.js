import {
  Text, View, Image, TouchableOpacity, Alert,
} from 'react-native';
import Dialog from 'react-native-dialog';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from 'react-native-modal-loader';
import style from './styles';
import Chipbutton from '../../../components/buttons/index';
import SimpleInput from '../../../components/Input/Input';
import check from '../../../assets/checked.png';
import { changeToken } from '../../../redux/actions/index';
import uncheck from '../../../assets/uncheck.png';
import { deleteUserAccount } from '../../../services/UserService';

function DeleteAccountLast({ route, updateUserToken }) {
  const [isChecked, setChecked] = useState(false);
  const [checkboxImage, setCheckboxImage] = useState(uncheck);
  const { reason, description } = route.params;
  const [password, setPassword] = useState(false);
  const [email, setEmail] = useState(null);
  const checkboxSelect = () => {
    isChecked ? setChecked(false) : setChecked(true);
    isChecked ? setCheckboxImage(uncheck) : setCheckboxImage(check);
  };
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const deleteuser = () => {
    setLoading(true);
    deleteUserAccount(reason, email, description, password).then((res) => {
      if (res.response === 'true') {
        setVisible(false);
        setLoading(false);
        RemoveUserToken();
      } else {
        setLoading(false);
        Alert.alert('Account Delete', res.message, ['OK']);
      }
    });
  };
  const RemoveUserToken = async () => {
    updateUserToken(false);
    await AsyncStorage.removeItem('token');
  };
  return (
    <View style={{ ...style.container }}>
      <Loader opacity={0.8} loading={loading} size="small" color="black" />

      <View style={{ ...style.innerContainer }}>
        <View style={{ ...style.textView, ...style.firstScreenNextButton }}>
          <Text style={{ ...style.headingText }}>
            It&apos;s advisable for you to request your
            data to be sent to your email.
            {' '}

          </Text>
        </View>
        <View style={style.section}>
          {/* <Checkbox
            style={style.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          /> */}
          <TouchableOpacity
            style={style.imageContainer}
            activeOpacity={0.7}
            testID="checkbox"
            onPress={() => { checkboxSelect(); }}
          >
            <Image style={style.checkboxImage} source={checkboxImage} />
          </TouchableOpacity>
          <Text style={style.paragraph}>Yes, send my data to my email.</Text>
        </View>
        <View style={style.textAreaContainer}>
          <SimpleInput
            style={{}}
            value={email}
            testID="email"
            marginTop={12}
            lineColor="gray"
            title="Email"
            onChangeText={setEmail}
          />
        </View>
        <View style={{ ...style.firstScreenNextButton }}>
          <View style={{ ...style.radioButtonContainer }} />
          <Chipbutton
            text="CONFIRM DELETION"
            customStyle={style.Createbutton}
            customText={style.CreateAccountText}
            testID="button"
            onPress={() => {
              setVisible(true);
            }}
          />
        </View>
        <Dialog.Container visible={visible}>
          <Dialog.Title>
            <Text>Account delete</Text>
          </Dialog.Title>
          <Dialog.Description>
            <Text>
              Do you want to delete this account? You cannot undo this action.
            </Text>
          </Dialog.Description>
          <Dialog.Input placeholder="Enter your passwrod" secureTextEntry onChangeText={setPassword} />
          <Dialog.Button label="Cancel" onPress={() => (setVisible(false))} testID="cancel" />
          <Dialog.Button style={style.deleteColor} label="Delete" onPress={() => (deleteuser())} testID="delete" />
        </Dialog.Container>
        <View style={{ ...style.textView, ...style.firstScreenNextButton }}>
          <Text style={{ ...style.headingText }}>
            If you log in to CHIP within the next 60 days,
            you&apos;ll have the option to cancel the deletion
            and retrieve any of the content or information
            you&apos;ve added to your account.
            {/* It&apos;s advisable for you to request your
            data to be sent to your email.
            {' '} */}

          </Text>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  userToken: state.userToken,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserToken: (value) => dispatch(changeToken(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccountLast);
