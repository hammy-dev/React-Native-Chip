import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  modalContainer: { margin: 0, backgroundColor: Colors.modalBackgroundColor },
  container(height) {
    return {
      borderWidth: 1, height, backgroundColor: Colors.white, width: '93%', alignSelf: 'center', borderRadius: 20,
    };
  },

});
