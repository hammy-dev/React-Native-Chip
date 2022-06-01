/* Native Imports */
import {
  View, Text, Alert,
} from 'react-native';
import { useState } from 'react';
import { connect } from 'react-redux';

/* Custom Component Import */
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import AUX from '../../components/AUX-/index';
import Card from '../../components/Cards';
import SimpleInput from '../../components/Input/Input';
import ChipButton from '../../components/buttons/index';
import styles from './styles';

/* Services */
function AddMoney({ balance, navigation }) {
  const [amount, setAmount] = useState(null);
  const handleAddMoney = () => {
    if (!amount) {
      Alert.alert(
        'CHIP',
        'Please enter amount',
        [

          { text: 'OK' },
        ],
      );
    } else {
      navigation.navigate('TopUpMethod', { amount });
    }
  };
  return (
    <AUX>
      <KeyboardAwareScrollView>
        <Text style={styles.balance}>Available balance</Text>
        <Text style={styles.amount}>
          {`NAf ${balance}`}
        </Text>
        {/* User Avator */}
        {/* User Card */}
        <View style={styles.cardMainContainer}>
          <Card borderRadious={20}>
            <SimpleInput
              testID="amount"
              marginTop={12}
              lineColor="gray"
              title="Enter Amount"
              value={amount}
              onChangeText={(taxamount) => setAmount(taxamount)}
              keyboardType="numeric"
            />
            <Text style={styles.termsandCondPara}>
              Note: Standard NAf 1.00 fee applies for Bank wire top ups.
            </Text>
          </Card>
          <ChipButton
            testID="pay"
            text="ADD MONEY"
            customStyle={styles.chipBtn}
            customText={{ color: '#ffffff' }}
            activeOpacity={0.7}
            onPress={() => { handleAddMoney(); }}
          />
        </View>
      </KeyboardAwareScrollView>
    </AUX>
  );
}
const mapStateToProps = (state) => ({
  balance: state.balance,
});
export default connect(mapStateToProps)(AddMoney);
