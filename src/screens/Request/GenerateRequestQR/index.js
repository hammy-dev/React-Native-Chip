/* Native Reach Import */
import { useState } from 'react';

import {
  Alert,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Chipbutton from '../../../components/buttons/index';
import styles from './styles';
import Card from '../../../components/Cards/index';
import AUX from '../../../components/AUX-/index';
import Input from '../../../components/Input/Input';

function GenerateQrRequest({ navigation }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const validateFields = () => {
    if (amount === '') {
      Alert.alert('CHIP', 'Please enter amount', ['OK']);
    } else if (description === '') {
      Alert.alert('CHIP', 'Please enter description', ['OK']);
    } else {
      navigation.navigate('GeneratedQR', { amount, description });
    }
  };
  return (

    <AUX>
      <KeyboardAwareScrollView>
        <View style={styles.cardMainContainer}>
          <Card>
            {/* Input */}
            <Input
              title="Enter amount"
              value={amount}
              keyboardType="numeric"
              autoCapitalize="none"
              testID="amountInput"
              onChangeText={(val) => setAmount(val)}
            />
            {/* Description */}
            <Input
              title="Description"
              value={description}
              autoCapitalize="none"
              testID="description"
              onChangeText={(val) => setDescription(val)}
            />

            <View style={styles.simpleView} />
          </Card>
          {/* Create Account Button */}
          <View style={styles.CreateAccount}>
            <Chipbutton
              text="Generate QR"
              customStyle={styles.Createbutton}
              customText={styles.CreateAccountText}
              testID="button"
              onPress={() => { validateFields(); }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </AUX>
  );
}

export default GenerateQrRequest;
