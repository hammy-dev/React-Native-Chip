// import React
import React, { useState, useEffect } from 'react';
import {
  Text, View, FlatList, TextInput, Image, TouchableOpacity,
} from 'react-native';
// Custom Import

import * as Contacts from 'expo-contacts';
import Card from '../../components/Cards/index';
import RequestComponent from '../../components/FriendRequestComponent/index';
import AUX from '../../components/AUX-/index';
import styles from './styles';
// third party import
/* Services */
import { getRecentContact, getUserFriend } from '../../services/Transaction';
import image from '../../assets/ic_search.png';
/* FlatList Render Function */
function ItemView({ item }) {
  return (
    <RequestComponent
      userId={item.id}
      name={item.username}
      phone={item.mob_num}
      uri={item.profile_image}
    />
  );
}
function Request({ navigation }) {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [contact, setContact] = useState(false);
  const [filterList, setFilterList] = useState({});

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

    /* API Integration */
    getRecentContact()
      .then((res) => {
        if (res.response === 'true') {
          // console.log("This is my API Data=-------=>",res.data);
          setFilteredDataSource(res.data);
          setMasterDataSource(res.data);
          setContact(true);
        } else {
          setContact(false);
        }
      });
  }, []);
  const mydata = () => { };
  useEffect(() => {
    getUserFriend(filterList).then(() => {
    });
  }, [filterList]);

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
  return (
    <AUX>
      <View style={styles.container}>
        <Card>
          <View style={styles.textInputContainer}>
            <TextInput
              testID="contact"
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
              : <View style={styles.contact}><Text>Contact Not Found !</Text></View>
          }
        </Card>
        <View style={styles.QRContainer}>
          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.OR}>OR</Text>
            <View style={styles.line} />
          </View>
          <TouchableOpacity style={styles.touch} activeOpacity={0.7} testID="button" onPress={() => { navigation.navigate('RequestQR'); }}>
            <Text style={styles.QRText}>Generate QR Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AUX>
  );
}

export default Request;
