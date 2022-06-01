import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({

  Createbutton: {
    alignSelf: 'center',
    alignItems: 'center',
    height: 60,
    width: '40%',
    justifyContent: 'center',
    backgroundColor: Colors.header,
  },
  bankCardContainer: {
    borderWidth: 2, width: '45%', height: 150, justifyContent: 'center', borderRadius: 10, borderColor: Colors.grey, backgroundColor: Colors.white,
  },
  bankCardContainerSelected: {
    borderWidth: 2, width: '45%', height: 150, justifyContent: 'center', borderRadius: 10, borderColor: Colors.header, backgroundColor: Colors.white,
  },
  bankCardImage: {
    width: '90%', resizeMode: 'contain', height: '90%', alignSelf: 'center',
  },
  bankImageContainer: {
    width: '80%', resizeMode: 'contain', alignSelf: 'center', height: '80%',
  },
  bankInfoHeading: {
    fontSize: 20,
    width: '90%',
    fontWeight: 'bold',
  },
  CreateAccountText: {
    color: Colors.white,
  },
  closeModal: {
    paddingVertical: 12, paddingHorizontal: 35, borderRadius: 30, backgroundColor: Colors.header,
  },
  closeModalText: { fontSize: 18, color: Colors.white },
  rowContainer: {
    flexDirection: 'row', justifyContent: 'space-between', height: 'auto', padding: '5%',
  },
  bankImageContainerText: { alignSelf: 'center', color: Colors.grey },
  bankContainer: {
    width: 150,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    backgroundColor: Colors.white,
    borderColor: Colors.header,
  },
  addBankContainer: { flexDirection: 'row', marginVertical: 20, marginLeft: 30 },
  addBankContainerText: { fontSize: 20 },
  addBankIcon: {
    marginLeft: 10, width: 26, height: 26, alignSelf: 'center',
  },
  addBankIconImage: { height: 22, width: 22 },
  bankList: { height: 'auto' },
  addAmountContainer: {
    backgroundColor: Colors.white,
    borderColor: Colors.grey,
    borderWidth: 1.5,
    borderRadius: 10,
    marginTop: 30,
    width: '89%',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    paddingTop: 10,
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 1.5,
    // elevation: 2,
  },
  withDrawTextContainer: { width: '90%', alignSelf: 'center', marginVertical: 20 },
  withDrawText: { color: Colors.lightBlack, fontSize: 16, textAlign: 'left' },
  bankContiner: {
    width: '90%', borderColor: Colors.grey, borderWidth: 1, alignSelf: 'center', marginVertical: 10, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: Colors.white, paddingVertical: 20,
  },
  input: { borderBottomColor: Colors.lightGrey, borderBottomWidth: 2, paddingBottom: 10 },
  bankContainerTextAlignment: { alignSelf: 'center', width: '20%' },
  bankFontWeight: { fontWeight: '300' },
  checkbox: {
    borderRadius: 20, padding: 10, margin: 5, alignSelf: 'center', borderWidth: 3,
  },
  // Modal design
  buttonContainer: { alignSelf: 'center', marginTop: 20 },
  header: {
    textAlign: 'center', fontSize: 17, marginTop: 20, color: Colors.header, fontWeight: 'bold',
  },
  para: {
    textAlign: 'center', fontSize: 17, marginTop: 10, width: '100%', alignSelf: 'center', color: Colors.header, fontWeight: 'bold',
  },
  imageSettings: { alignSelf: 'center', marginTop: 10 },
});
