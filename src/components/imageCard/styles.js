import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({

  imgDiv:
    {
      width: 60,
      height: 60,
      borderRadius: 30,
      overflow: 'hidden',
      marginRight: 10,
    },
  title: {
    color: Colors.grey,
    textAlign: 'center',
    width: 60,
  },
  img: {
    width: '100%',
    height: '100%',
  },

});
