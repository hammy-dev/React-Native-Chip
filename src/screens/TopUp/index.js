/* Native Imports */
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

/* Custom Component Import */
import AUX from '../../components/AUX-/index';
import ChipButton from '../../components/buttons/index';
import styles from './styles';
import ChipAlertModal from '../../components/AlertModal';
import CommingSoon from '../../components/commingSoonModal';
import commingsoonImage from '../../assets/commingsoon.png';
import { getAllBank } from '../../services/Cashout';

const image = require('../../assets/addmoney/addmoney.png');
const bankImage = require('../../assets/addmoney/cards.png');

/* Services */
function TopUpMethod({ navigation }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [cardVisible, setcardVisible] = useState(false);
  const [value, setValue] = useState(null);
  const [btnVisible, setBtnVisible] = useState(false);
  const [url, setbankurl] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllBank()
      .then((res) => {
        const newArray = [];
        res.data.forEach((element) => {
          newArray.push({ label: element.name, value: element.id, url: element.url });
        });
        setItems(newArray);
      })
      .catch((e) => { e; });
  }, []);

  const toggle = () => {
    setcardVisible(!cardVisible);
  };
  return (
    <AUX>
      <View style={styles.mainContainer}>
        {/* <View style={styles.container}> */}
        <View style={styles.rowContainer}>
          <TouchableOpacity
            testID="visibleCard"
            onPress={() => { setcardVisible(true); }}
            style={styles.bankCardContainer}
          >
            <Image
              source={bankImage}
              style={styles.bankCardImage}
            />
          </TouchableOpacity>
          <View style={styles.bankCardContainerSelected}>
            <Image
              source={image}
              style={styles.bankImageContainer}
            />
            <Text style={styles.bankImageContainerText}>Bank Wire Transfer</Text>
          </View>
        </View>
        {/* <Text style={styles.bankInfoHeading}>Bank Wire Transfer</Text> */}
        <DropDownPicker
          open={open}
          onSelectItem={(e) => {
            setbankurl(e.url);
            setBtnVisible(true);
          }}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.dropDownPicker}
          textStyle={styles.dropDownPickerText}
          testID="dropDown"
          dropDownContainerStyle={styles.dropDownContainerStyle}
        />
        {btnVisible ? (
          <ChipButton
            text="CONTINUE"
            customStyle={styles.customStyle}
            testID="setVisible"
            customText={{ fontSize: 22 }}
            onPress={() => { setVisible(true); }}
          />
        ) : <View>{ }</View>}

      </View>
      {cardVisible
        && (
          <CommingSoon
            text={(
              <View>
                <Text style={styles.header}>This Feature Is Temporarily Unavailable</Text>
                <Image source={commingsoonImage} style={styles.imageSettings} />
                <Text style={styles.para}>
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
                  onPress={() => { toggle(); }}
                >
                  <Text style={styles.closeModalText}>Back</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      {visible && (
        <ChipAlertModal
          heading="Attention !"
          message="Note: Please MAKE SURE TO INCLUDE PHONE NUMBER IN THE PAYMENT DESCRIPTION."
          // onBackdropPress={() => { setVisible(false); }}
          attention={(
            <View style={styles.attentionBlock}>
              <TouchableOpacity onPress={() => { setVisible(false); }} testID="decline">
                <Text style={styles.declineButton}>Decline</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { navigation.navigate('BankWebview', url); setVisible(false); }} testID="accept">
                <Text style={styles.AcceptButton}>ACCEPT</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
      {/* </View> */}
    </AUX>
  );
}

export default TopUpMethod;
