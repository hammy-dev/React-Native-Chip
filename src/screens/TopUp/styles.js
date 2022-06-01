import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  mainContainer: {
    padding: '5%',
  },
  container: {

  },
  attentionBlock: { flexDirection: 'row', justifyContent: 'space-around' },
  declineButton: { color: Colors.grey, fontSize: 19, fontWeight: 'bold' },
  AcceptButton: { color: Colors.header, fontSize: 19, fontWeight: 'bold' },
  bankCardContainer: {
    borderWidth: 2, width: '45%', justifyContent: 'center', borderRadius: 10, borderColor: Colors.grey, backgroundColor: Colors.white,
  },
  bankCardContainerSelected: {
    borderWidth: 2, width: '45%', justifyContent: 'center', borderRadius: 10, borderColor: Colors.header, backgroundColor: Colors.white,
  },
  bankCardImage: {
    width: '90%', resizeMode: 'contain', height: '90%', alignSelf: 'center',
  },
  bankImageContainer: {
    width: '80%', resizeMode: 'contain', alignSelf: 'center', height: '80%',
  },
  // dropDownCardContainer: {
  //   marginTop: '30%',
  //   borderRadius: 10,
  //   borderColor: Colors.grey,
  //   borderWidth: 1,
  //   backgroundColor: Colors.white,
  // },
  customStyle: {
    backgroundColor: Colors.header, justifyContent: 'center', alignSelf: 'center', width: '45%',
  },
  bankImageContainerText: { alignSelf: 'center', color: Colors.grey },
  rowContainer: {
    flexDirection: 'row', justifyContent: 'space-between', height: 150,
  },
  dropDownPicker: {
    borderBottomColor: Colors.dropDownPicker,
    marginVertical: 30,
  },
  bankInfoHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dropDownPickerText: {
    fontSize: 20,
    color: Colors.dropDownPickerText,
  },
  closeModal: {
    paddingVertical: 12, paddingHorizontal: 35, borderRadius: 30, backgroundColor: Colors.header,
  },
  closeModalText: { fontSize: 18, color: Colors.white },
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
