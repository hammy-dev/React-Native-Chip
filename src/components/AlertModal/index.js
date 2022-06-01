import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import Card from '../Cards/index';
import styles from './styles';

function ChipAlertModal({
  heading, image, message, phone, attention, ...rest
}) {
  return (
    <Modal isVisible style={styles.modal} transparent {...rest}>
      <View style={styles.container}>
        <Card borderRadius={3}>
          <View style={styles.Image}>
            <Text style={styles.head}>{heading}</Text>
            <Text style={styles.message}>{message}</Text>
            <Text style={styles.phone}>The total amount that needs to be sent is NAf 26.00</Text>
            <Text style={styles.phone}>Send the total amount to:</Text>
            <FlatList
              style={styles.flatlistspacing}
              disableVirtualization
              scrollEnabled={false}
              scrollIndicatorInsets
              data={[
                { key: 'Bank Name: Manduro & Curiels Bank' },
                { key: 'Account number: 33 24 90 07' },
                { key: 'Beneficiary name: Stichting Derdengelden Avant Grade Technologies(1)  ' },
                { key: 'Beneficiary address: Kaya Akaro 15' },
              ]}
              renderItem={({ item }) => (
                <Text style={styles.item}>
                  {'\u2022' }
                  {' '}
&nbsp;
                  {item.key}
                </Text>
              )}
            />
            <Text style={styles.phone}>
              We cannot top up your wallet without your phone number.
              once we recive your wire transfer your wallet balance
              will reflect the topped up amount.
              This may take upto 1-2 bussiness days.

            </Text>
            {attention}
          </View>
        </Card>
      </View>
    </Modal>
  );
}
export default ChipAlertModal;
