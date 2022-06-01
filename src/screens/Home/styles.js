import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create(
  {
    mainContainer: {
      display: 'flex',
    },
    cardContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    customCard: {
      width: '90%',
    },
    billPayment: {
      width: '90%',
      backgroundColor: Colors.white,
      alignSelf: 'center',
      borderRadius: 10,
      paddingVertical: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
      shadowOpacity: 0.3,
      shadowOffset: { width: 2, height: 3 },
      shadowRadius: 5,
      shadowColor: Colors.black,
      elevation: 5,
    },
    billtransaction: {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 30,
    },
    filterBtn:
    {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderWidth: 3,
      borderColor: Colors.white,
      overflow: 'hidden',
      paddingHorizontal: 6,
      paddingVertical: 8,
      backgroundColor: Colors.textColor,
      marginTop: -30,
    },
    modalView: {
      height: '40%',
      marginTop: 'auto',
      backgroundColor: Colors.white,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      overflow: 'hidden',
    },
    modalClose: {
      alignSelf: 'flex-end',
      marginRight: 10,
      marginTop: 10,
    },
    modalHeader: {
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'normal',
    },
    imageStyle: {
      backgroundColor: Colors.textColor,
      width: '100%',
      height: '100%',
    },
    text1: { fontSize: 16, marginVertical: 8 },
    text2: { fontSize: 16, marginVertical: 8, marginBottom: 45 },
    modal: { margin: 0 },
    flatList: { marginTop: 10, marginBottom: 20, marginLeft: 15 },
    billPaymentStyle: { width: 40, height: 40 },
    billPaymentText: {
      alignSelf: 'center', marginLeft: 10, fontSize: 16, color: Colors.textColor,
    },
    home: { width: 30, height: 30 },
    mainView: { marginHorizontal: 20, marginTop: 20 },
    availableBalance: { fontSize: 19, fontWeight: 'normal' },
    naf: { fontSize: 18, fontWeight: 'bold' },
    mainContainer1: { marginLeft: 30 },
    text: {
      fontSize: 16, color: Colors.grey, marginLeft: 15,
    },
    signOut: { fontSize: 14, marginVertical: 10, alignSelf: 'center' },
    btn: { borderWidth: 1, width: '40%', alignSelf: 'center' },
    headerBank: {
      textAlign: 'center', fontSize: 22, marginTop: 20, color: Colors.black, fontWeight: 'bold',
    },
    paraBank: {
      textAlign: 'center',
      fontSize: 17,
      marginTop: 10,
      width: '100%',
      alignSelf: 'center',
      color: Colors.grey,
      fontWeight: 'bold',
      padding: 10,
    },
    buttonContainer: { alignSelf: 'center', marginTop: 20 },
    closeModal: {
      paddingVertical: 12, paddingHorizontal: 35, borderRadius: 30, backgroundColor: Colors.header,
    },
    closeModalText: { fontSize: 18, color: Colors.white },
    imageContainer: {
      backgroundColor: Colors.white,
      margin: 0,
      width: '5%',
      height: 'auto',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 7,
      marginLeft: 7,
    },
    checkboxImage: { width: 20, height: 20, marginLeft: 1 },
    checkContainer: { height: 160 },
  },

);
