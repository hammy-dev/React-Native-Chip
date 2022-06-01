// import React
import React, { useState, useEffect, useRef } from 'react';
import {
  Text, View, FlatList, TextInput, Image, Keyboard, Dimensions, Alert, TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
// Custom Import

import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Device from 'expo-device';
import * as Contacts from 'expo-contacts';
import CardImage from '../../components/imageCard';
import Card from '../../components/Cards/index';
import AUX from '../../components/AUX-/index';
import loaderJson from '../../assets/loading.json';
import scanner from '../../assets/scanner.json';
import styles from './styles';

// third party import
/* Services */
import { getRecentContact, getUserFriend } from '../../services/Transaction';
import image from '../../assets/ic_search.png';
/* FlatList Render Function */
function ItemView({ item }) {
  return (
    <CardImage
      user_id={item.id}
      name={item.username}
      phone={item.mob_num}
      uri={item.profile_imag}
    />
  );
}
function PayScreen() {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isDevice, setDevice] = useState(false);
  const [contact, setContact] = useState(false);
  const [filterList, setFilterList] = useState({});
  const [loading, setLoading] = useState(false);
  const animation = useRef(null);

  /* Get the data and keyboard open and close functionality */
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          const arr = [];

          for (const l in data) {
            if (data[l].phoneNumbers) {
              const number = data[l].phoneNumbers;

              arr.push({
                contactname: data[l].name,
                phonenumber: number[0].number,
              });
            }
          }
          setFilterList({ contactdata: arr });
        }
      }
    })();

    /* Get Recent Contact API Integration */

    /* Check Device is Physical or not */

    if (Device.isDevice) {
      setDevice(Device.isDevice);
    } else {
      setDevice(false);
    }

    /* API Integration */
    setLoading(true);
    getRecentContact()
      .then((res) => {
        if (res.response === 'true') {
          setFilteredDataSource(res.data);
          setMasterDataSource(res.data);
          setContact(true);
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 7000);
          setContact(false);
        }
      });
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  const mydata = () => { };
  useEffect(() => {
    getUserFriend(filterList).then(() => {
    });
  }, [filterList]);

  /* Get the QR Code Details */

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter((item) => {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  /* eslint no-nested-ternary:0 */
  return (
    <AUX>
      <View style={styles.divider}>
        <View style={styles.container}>
          <Card>
            <View style={styles.textInputContainer}>
              <TextInput
                testID="mobile"
                style={styles.textInputStyle}
                onChangeText={(text) => searchFilterFunction(text)}
                value={search}
                underlineColorAndroid="transparent"
                placeholder="Enter Mobile Number"
              />
              <Image source={image} style={styles.image} />
            </View>
            <View style={styles.seprator} />
            <TouchableOpacity testID="data" onPress={() => { mydata(); }}>
              <Text style={styles.header}>Recent</Text>
            </TouchableOpacity>
            {
              contact
                ? (
                  <FlatList
                    horizontal
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={ItemView}
                    style={styles.flatList}
                    showsHorizontalScrollIndicator={false}
                  />
                )
                : (
                  loading
                    ? (
                      <LottieView
                        autoPlay
                        ref={animation}
                        style={styles.loader}
                        source={loaderJson}
                      />
                    )
                    : <View style={styles.contact}><Text>Contact Not Found !</Text></View>
                )

            }
          </Card>
        </View>
        <View style={styles.divider2}>
          {!keyboardStatus
            && (
              <View style={styles.mainView}>
                <View style={styles.overlay}>
                  <LottieView
                    autoPlay
                    loop
                    ref={animation}
                    style={styles.scanner}
                    source={scanner}
                  />
                </View>
                {isDevice
                  ? (
                    <BarCodeScanner
                      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                      style={{
                        width: Dimensions.get('screen').width,
                        height: Dimensions.get('screen').height,
                      }}
                    />
                  )
                  : <Text style={styles.text}>QR Code Not Working on Virtual Device</Text>}
              </View>
            )}
        </View>
      </View>
    </AUX>
  );
}

export default PayScreen;
