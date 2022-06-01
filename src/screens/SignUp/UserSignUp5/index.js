import {
  Image, View, Text, Alert,
} from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import ChipLoaderbutton from '../../../components/LoaderButtons/index';
import styles from './styles';

import Circle from '../../../components/Circles/index';

const imagee = require('../../../assets/SignUp/signup4.png');

function UserSignUp5({ navigation, route }) {
  const data = route.params;
  // const [image, setImage] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    setIsloading(true);
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      // setImage(result.uri);
      if (result.uri) {
        data.image = result.uri;
        navigation.navigate('UserSignUp6', data);
        setIsloading(false);
      } else {
        Alert.alert('Please Select the Image');
      }
    } else {
      Alert.alert('Please Select the Image');
    }
  };

  return (

    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.circleContainer}>
          <View style={styles.circle1}>
            <Circle text="1" style={styles.smallCircle} textStyle={styles.circleText1} />
          </View>
          <View style={styles.line} />
          <View style={styles.circle1}>
            <Circle text="2" style={styles.smallCircle2} textStyle={styles.circleText2} />
          </View>
        </View>
        <View>
          <View style={styles.textWrap}>
            <Text style={styles.uploadIdentity}>Upload Identity</Text>
            <Text style={styles.signUp}>SignUp</Text>
          </View>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.secondContainer1}>
          <View style={styles.secondContainer2}>
            <View style={styles.secondContainer3}>
              <View style={styles.secondContainer4}>
                <View style={styles.circle}>
                  <Image source={imagee} />
                </View>
              </View>
              <View style={styles.secondContainer5} />

            </View>
            <View style={styles.secondContainer6}>
              <View style={styles.secondContainer7}>

                <Text style={styles.text}>
                  Submit your identity proof photos
                  {'\n'}
                  {' '}
                  e.g: Driver License, ID
                  {'& '}
                  {' '}
                  Passport
                  {' '}
                </Text>
              </View>
              <View style={styles.btnContainer}>

                <ChipLoaderbutton
                  testID="button"
                  loadingMessage="setting Image"
                  isLoading={isLoading}
                  text="Upload"
                  customStyle={styles.customStyle}
                  customText={{ fontSize: 22 }}
                  onPress={() => pickImage()}
                />
              </View>
            </View>
          </View>
          <View style={styles.extranContainer} />
        </View>

      </View>
    </View>
  );
}

export default UserSignUp5;
