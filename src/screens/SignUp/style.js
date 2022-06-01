import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({

  mainContainer: { marginVertical: '30%', flex: 1 },
  cardContainer: { flex: 1, alignItems: 'center' },
  imageView: {
    marginTop: '20%',
    alignItems: 'center',
    // marginTop: 50,

  },
  marginToCenter: {
    marginVertical: '20%',
  },
  tinyLogo: {
    width: 200,
    height: 200,
    marginRight: 50,

  },

  SignupMerchantButton: {
    // backgroundColor: '#f0eefc',
    backgroundColor: Colors.backgroundColorMain,
    borderRadius: 30,
    width: 300,
    height: 60,
    borderWidth: 1,

  },
  SignupMerchantText: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 16,

  },

  SignupUserButton: {
    backgroundColor: Colors.button,
    borderRadius: 30,
    width: 300,
    height: 60,
    marginBottom: '3%',
  },
  SignupUserText: {
    paddingTop: 16,
    fontSize: 18,
    color: Colors.white,
  },
  linkText: { marginLeft: '0.2%' },
});
