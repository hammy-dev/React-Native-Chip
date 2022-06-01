import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.transparent,
    marginLeft: 60,
    width: 300,
    height: 60,
    marginBottom: 15,

  },
  buttonText: {
    paddingTop: 15,
    fontSize: 18,
    color: Colors.black,
    fontWeight: 'bold',
  },
});
