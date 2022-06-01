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
  },
  img: { width: '100%', height: '100%' },
});
