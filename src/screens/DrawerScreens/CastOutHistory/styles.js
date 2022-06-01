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
  flatList: { height: '40%', width: '100%', padding: 5 },
  imgTouch: {
    width: 50, height: 50, borderRadius: 35, overflow: 'hidden', borderWidth: 1, borderColor: Colors.lightGrey, padding: 6,
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  transCardContainer: { margin: 2 },
  transDate: { margin: 3, color: Colors.grey, fontSize: 11 },
  imgContainer: {
    width: '100%',
    alignSelf: 'center',
    marginVertical: 0,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingVertical: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: Colors.lightGrey,
  },
  paymentCardContainer: { marginHorizontal: 10 },
  PaidRecevieved: { fontSize: 15 },
  TransTime: { fontSize: 13, color: Colors.grey },
  amountContainer: { marginLeft: 'auto', justifyContent: 'flex-end' },
  loaderStyle: { height: '100%' },
  loaderContainer: { flexDirection: 'row', marginVertical: 30 },
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
  status(status) {
    return status ? {
      fontSize: 13, color: Colors.addedAmount,
    } : {
      fontSize: 13, color: Colors.pending,
    };
  },
});
