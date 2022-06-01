import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  circle: {
    backgroundColor: Colors.pink,
    textAlign: 'center',
    borderRadius: 60 / 2,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: Colors.green,
  },
});
