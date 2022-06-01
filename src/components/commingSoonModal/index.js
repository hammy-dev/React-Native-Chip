import { View } from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';

function CommingSoon({ button, text, height }) {
  height = !height ? '57%' : height;
  return (

    <Modal isVisible style={styles.modalContainer}>
      <View style={styles.container(height)}>
        {text}

        {button}

      </View>
    </Modal>
  );
}

export default CommingSoon;
