import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  balance: { fontSize: 18, marginTop: 15, marginLeft: 15 },
  amount: {
    fontSize: 18, marginTop: 5, marginLeft: 15, fontWeight: 'bold',
  },
  imgContainer: {
    flexDirection: 'row', marginRight: 10, marginTop: 25, marginLeft: 15,
  },
  imgTouch: {
    width: 60, height: 60, borderRadius: 30, overflow: 'hidden',
  },
  imgDetails: { justifyContent: 'center', marginLeft: 10 },
  chipBtn: {
    alignItems: 'center',
    borderRadius: 20,
    height: 40,
    width: '50%',
    justifyContent: 'center',
    backgroundColor: Colors.header,
    alignSelf: 'center',
    // borderWidth: 0,
    marginTop: -15,
  },
  termsandCondPara: {
    width: '100%',
    color: Colors.addMoneyTermsFontColor,
    paddingTop: 5,
    alignSelf: 'center',
    textAlign: 'center',
  },
  mainImage: {
    width: '100%', height: '100%',
  },
  imageDetails: { fontSize: 16 },
  cardMainContainer: {
    marginTop: 25, width: '90%', alignSelf: 'center',
  },

});
