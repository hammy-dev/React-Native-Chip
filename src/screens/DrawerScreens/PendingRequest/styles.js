import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

export default StyleSheet.create({
  mainCard: {
    marginTop: '8%',
    height: '90%',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.white,
  },
  ActivityIndicator: {
    marginHorizontal: '50%',
    marginVertical: '60%',
  },
  imgTouch: {
    width: 50, height: 50, borderRadius: 35, overflow: 'hidden', borderWidth: 1, borderColor: Colors.grey,
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  cardMain: { margin: 2 },
  cardText: { margin: 3, color: Colors.grey, fontSize: 11 },
  innerCard: {
    width: '100%', alignSelf: 'center', marginVertical: 0, flexDirection: 'row', backgroundColor: Colors.white, padding: 5, borderBottomWidth: 1, borderColor: Colors.containerBorder,
  },
  requestText: { marginHorizontal: 10 },
  reqinnerText: { fontSize: 13, fontWeight: 'bold' },
  reqinnerText2: { fontSize: 10, color: Colors.grey },
  amountView: { marginLeft: 'auto', justifyContent: 'flex-start' },
  loaderStyle: { height: '100%' },
  loaderContainer: { flexDirection: 'row', marginVertical: 20 },
  loaderItemAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: Colors.grey,
    marginHorizontal: 5,
  },
  loaderItemLine: { width: 250, height: 10, marginBottom: 5 },
  loaderSecondLine: { width: 50, height: 2, marginBottom: 5 },
  loaderThirdLine: { width: 250, height: 20 },
  amount(received) { return { fontSize: 11, fontWeight: 'bold', color: received ? '#de0205' : '#69de6a' }; },

});
