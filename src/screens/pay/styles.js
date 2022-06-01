import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({

  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    width: '90%',
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seprator: {
    width: '100%',
    backgroundColor: Colors.grey,
    height: 1,
  },
  header: {
    fontSize: 16,
    marginVertical: 10,
  },
  text: { alignSelf: 'center' },
  contact: { alignSelf: 'center' },
  flatList: { marginBottom: 30 },
  mainView: { flex: 1, height: 50 },
  image: { width: 27, height: 27 },
  divider: { flex: 1 },
  divider2: { height: '57%' },
  loader: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    backgroundColor: Colors.loaderBackground,
  },
  scanner: {
    alignSelf: 'center',
    backgroundColor: Colors.loaderBackground,
  },
  overlay: {
    // flex: 1,
    position: 'absolute',
    opacity: 0.5,
    // backgroundColor: Colors.black,
    marginVertical: '10%',
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
