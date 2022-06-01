/* Native Imports */
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { useState } from 'react';

/* Custom Component Import */
import AUX from '../../../components/AUX-/index';
import styles from './styles';
import CommingSoon from '../../../components/commingSoonModal';
import commingsoonImage from '../../../assets/commingsoon.png';

const image = require('../../../assets/addmoney/addmoney.png');
const bankImage = require('../../../assets/addmoney/cards.png');

function BankCard() {
  const [visibleBank, setVisibleBank] = useState(false);
  const [visibleCard, setVisibleCard] = useState(false);
  const toggleBank = () => {
    setVisibleBank(!visibleBank);
  };

  const toggleCreditCard = () => {
    setVisibleCard(!visibleCard);
  };

  return (
    <AUX>
      <View style={styles.mainContainer}>
        {/* <View style={styles.container}> */}
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => {
              setVisibleCard(!visibleCard);
              (true);
            }}
            style={styles.bankCardContainer}
            testID="click"
            activeOpacity={0.7}
          >
            <Image
              source={bankImage}
              style={styles.bankCardImage}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { toggleBank(true); }}
            style={styles.bankCardContainer}
            testID="bank"
            activeOpacity={0.7}
          >
            <Image
              source={image}
              style={styles.bankImageContainer}
            />
            <Text style={styles.bankImageContainerText}>Banks</Text>
          </TouchableOpacity>

        </View>

      </View>
      {visibleCard
        && (
          <CommingSoon
            text={(
              <View>
                <Text style={styles.headerCard}>This Feature Is Temporarily Unavailable</Text>
                <Image source={commingsoonImage} style={styles.imageSettingsCard} />
                <Text style={styles.paraCard}>
                  Credit Card cashout are temporarily unavailable due to maintenance

                </Text>
              </View>
            )}
            button={(
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.closeModal}
                  activeOpacity={0.7}
                  testID="button"
                  onPress={() => { toggleCreditCard(); }}
                >
                  <Text style={styles.closeModalText}>Back</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}

      {visibleBank
        && (
          <CommingSoon
            height="37%"
            text={(
              <View>
                <Text style={styles.headerBank}>THIS FEATURE IS LAUNCHING SOON</Text>
                <Text style={styles.paraBank}>
                  This feature will let you link your bank account to your E-wallet directly.
                  You will get notified as soon this feature is live.

                </Text>
              </View>
            )}
            button={(
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.closeModal}
                  activeOpacity={0.7}
                  testID="button"
                  onPress={() => { toggleBank(); }}
                >
                  <Text style={styles.closeModalText}>Back</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
    </AUX>
  );
}

export default BankCard;
