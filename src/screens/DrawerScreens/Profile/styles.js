import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

export default StyleSheet.create({
  innerContainer: {
    padding: 18,
    height: 'auto',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    backgroundColor: Colors.white,
    marginTop: '-10%',
    elevation: 1,
    zIndex: -1,
  },
  profileContainer: {
    alignSelf: 'center', marginTop: '10%', width: '80%',
  },
  imgBorder: {
    width: 115,
    height: 115,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 1,
    elevation: 1,
  },
  imgInnerBorder: {
    width: 115,
    height: 115,
    overflow: 'hidden',
  },
  img:
    {
      width: '100%',
      height: '100%',
      borderWidth: 4,
      borderRadius: 60,
      borderColor: Colors.header,
    },
  imggroup: { width: 22, height: 22 },
  textContainer: {
    marginTop: '10%',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: '5%',
  },
  hrContainer: {
    marginBottom: '6%',
  },
  hrOneStyle: {
    height: 1,
    width: 50,
    backgroundColor: Colors.header,
    alignSelf: 'stretch',
  },
  hrTwoStyle: {
    marginTop: 1,
    height: 1,
    width: 50,
    backgroundColor: Colors.header,
    alignSelf: 'stretch',
  },
  usersNumber: {
    marginTop: '6%',
  },
  CreateAccount: {
    marginTop: -20, width: '100%', justifyContent: 'center', alignItems: 'center', position: 'relative',
  },
  Createbutton: {
    alignItems: 'center',
    height: 40,
    width: '50%',
    justifyContent: 'center',
    backgroundColor: Colors.header,
    elevation: 1,
    zIndex: 1,
  },
  CreateAccountText: {
    color: Colors.white,
  },
});
