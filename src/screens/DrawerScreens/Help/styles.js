import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

export default StyleSheet.create({

  innerContainer: {
    padding: 18,
    height: 'auto',
    borderRadius: 5,
    borderColor: Colors.card,
    backgroundColor: Colors.white,
    width: '90%',
    marginTop: 20,
    marginLeft: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 6,
  },
  textStyle: {
    width: '80%', fontSize: 20,
  },
});
