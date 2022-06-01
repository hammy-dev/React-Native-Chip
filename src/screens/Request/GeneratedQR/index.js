import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Card from '../../../components/Cards/index';
import AUX from '../../../components/AUX-/index';
import Chipbutton from '../../../components/buttons/index';
import styles from './styles';

function GeneratedQR({ navigation, route }) {
  const { amount, description } = route.params;
  return (
    <AUX>
      <View style={styles.flex}>
        <View style={styles.flex2}>
          {amount ? (
            <QRCode
              // QR code value
              value={amount || 'This is the main value'}
              // size of QR Code
              size={250}
              // Color of the QR Code (Optional)
              color="black"
              // Background Color of the QR Code (Optional)
              backgroundColor="white"
            />
          ) : <Text>Kindly Add Valid Amount</Text>}
        </View>
        <View style={styles.secondContainer}>
          <Card>
            <View style={styles.title}>
              <Text style={styles.head}>NAf</Text>
              <Text style={styles.amount}>{amount}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.title}>
              <Text style={styles.desp}>{description}</Text>
            </View>
            <View style={styles.divider} />
          </Card>
          <Chipbutton
            text="DONE"
            customStyle={styles.Createbutton}
            customText={styles.CreateAccountText}
            testID="button"
            onPress={() => { navigation.navigate('ChipDrawer'); }}
            activeOpacity={0.7}
          />
        </View>
      </View>
    </AUX>
  );
}
export default GeneratedQR;
