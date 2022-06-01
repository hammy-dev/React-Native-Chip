import { Text, View, Image } from 'react-native';
import Modal from 'react-native-modal';
import Card from '../Cards/index';
import styles from './styles';
import image1 from '../../assets/ic_alert_shield.png';
import image2 from '../../assets/ic_close_white.png';

function ChipPaymentModal({
  heading, image, message, phone, ...rest
}) {
  return (
    <Modal isVisible style={styles.modal} transparent {...rest}>
      <View style={styles.container}>
        <Card borderRadious={7}>
          <View style={styles.Image}>
            <Text style={styles.head}>{heading}</Text>
            <Image
              source={image ? image1 : image2}
              style={styles.img}
            />
            <Text style={styles.message}>{message}</Text>
            <Text style={styles.phone}>{phone}</Text>
          </View>
        </Card>
      </View>
    </Modal>
  );
}
export default ChipPaymentModal;
