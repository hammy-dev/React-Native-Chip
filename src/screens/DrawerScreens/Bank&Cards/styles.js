import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

export default StyleSheet.create({
  mainContainer: {
    padding: '5%',
  },
  container: {

  },
  bankCardContainer: {
    borderWidth: 2, width: '45%', height: 120, justifyContent: 'center', borderRadius: 10, borderColor: Colors.grey, backgroundColor: Colors.white,
  },
  bankCardImage: {
    width: '90%', resizeMode: 'contain', height: '90%', alignSelf: 'center',
  },
  bankImageContainer: {
    width: '55%', resizeMode: 'contain', alignSelf: 'center', height: '55%',
  },

  bankImageContainerText: {
    alignSelf: 'center', color: Colors.grey, marginTop: 3, fontSize: 15,
  },
  rowContainer: {
    flexDirection: 'row', justifyContent: 'space-between',
  },
  closeModal: {
    paddingVertical: 12, paddingHorizontal: 35, borderRadius: 30, backgroundColor: Colors.header,
  },
  closeModalText: { fontSize: 18, color: Colors.white },

  // Modal design
  buttonContainer: { alignSelf: 'center', marginTop: 20 },
  headerCard: {
    textAlign: 'center', fontSize: 17, marginTop: 20, color: Colors.header, fontWeight: 'bold',
  },
  paraCard: {
    textAlign: 'center', fontSize: 17, marginTop: 10, width: '100%', alignSelf: 'center', color: Colors.header, fontWeight: 'bold',
  },
  imageSettingsCard: { alignSelf: 'center', marginTop: 10 },

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

});
