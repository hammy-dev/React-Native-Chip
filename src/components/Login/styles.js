import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  cardMainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,

  },
  simpleView: {
    width: '100%', height: 1, backgroundColor: Colors.white, marginTop: 5,
  },
  codeText: {
    marginLeft: -20,
  },
  card: {
    display: 'flex',
    borderRadius: 50,
    backgroundColor: Colors.cardBackground,
    overflow: 'hidden',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5%',
    paddingBottom: 35,
  },
  forgetPassword: {
    alignSelf: 'flex-end',
    color: Colors.forgetPassword,
    paddingTop: 5,
    textDecorationLine: 'underline',
  },

  CreateAccountText: {
    color: Colors.white,
  },
  Createbutton: {
    alignItems: 'center',
    //   borderColor: Colors.black,
    // borderRadius: 20,
    // borderWidth: 0.9,
    height: 40,
    width: '80%',
    justifyContent: 'center',
    backgroundColor: Colors.header,
  },
  Createtext: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',

  },
  Loginbutton: {
    alignItems: 'center',
    borderColor: Colors.black,
    borderRadius: 50,
    borderWidth: 0.9,
    height: 40,
    width: '70%',
    justifyContent: 'center',

  },
  LoginbuttonDisable: {
    alignItems: 'center',
    borderColor: Colors.grey,
    borderRadius: 50,
    borderWidth: 0.9,
    height: 40,
    width: '70%',
    justifyContent: 'center',

  },
  LogintextDisable: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.grey,
  },
  Logintext: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.black,
  },
  contanierStyle: {
    width: '100%', backgroundColor: Colors.cardBackground, borderBottomWidth: 2, borderBottomColor: Colors.lightGrey,
  },
  textcontainerStyle: { backgroundColor: Colors.cardBackground },
  inputBox: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: Colors.lightGrey,
  },
  input: {
    paddingVertical: 12,
    // borderBottomWidth: 1,

  },
  loginCard: {
    borderColor: Colors.lightGrey,
    borderWidth: 2,
  },
  innerContainer: {
    width: '100%',
  },
  eye: {
    alignSelf: 'center',
    right: 20,
    marginVertical: 12,

  },
  phoneInput: {
    backgroundColor: Colors.black,
  },
  loginBtn: { alignItems: 'center', justifyContent: 'center', paddingTop: 30 },
  sperator: {
    flexDirection: 'row', alignSelf: 'center', marginTop: 15, marginBottom: 5,
  },
  line: {
    height: 1, width: '25%', backgroundColor: Colors.white, alignSelf: 'center', marginRight: 10,
  },
  leftLine: {
    height: 1, width: '25%', backgroundColor: Colors.white, alignSelf: 'center', marginLeft: 10,
  },
  CreateAccount: {
    marginTop: -20, width: '100%', justifyContent: 'center', alignItems: 'center', position: 'relative',
  },
  chipContainer: {
    alignItems: 'center', justifyContent: 'center', paddingTop: 40,
  },
  phoneView: { backgroundColor: Colors.black },
  loader: {
    width: 150,
    height: 150,
    backgroundColor: Colors.loaderBackground,
  },
});

// inputBox: {
//   // height: 55,
//   // width: '70%',
//   // borderBottomWidth: 1,
//   // fontSize: 16,
//   // color: '#002f6c',
//   // marginVertical: 10,
//   // marginHorizontal: 60,
// },
// input: {
//   // marginVertical: 10,
//   // borderBottomWidth: 1,

// },
// innerContainer: {
//   // padding: 25,
//   // height: 'auto',
//   // borderRadius: 40,
//   // backgroundColor: Colors.cardBackground,
//   // width: '100%',
//   // position: 'relative',
//   // height:'30%'
// },
