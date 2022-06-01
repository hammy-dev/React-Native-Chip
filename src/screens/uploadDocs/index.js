import {
  View, Text, Alert, TouchableOpacity, Image,
} from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Modal from 'react-native-modal';
import Chipbutton from '../../components/buttons/index';
import Circle from '../../components/Circles/index';
import styles from './style';
import { MERCHANT_ROLE_ID } from '../../constants/constants';
import SignUp from '../../assets/SignUp/signup4.png';
import homeIcon from '../../assets/homeicon/ic_close_green.png';
import camera from '../../assets/camera.png';
import gallery from '../../assets/gallery.png';

function UploadDoc({ route, navigation }) {
  const [visibility, setVisible] = useState(false);
  const data = route.params;
  delete data.screen;

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      data.headshot_img = result.uri;
      data.roleId = MERCHANT_ROLE_ID;
      if (result.uri) {
        // setVisible(false);
        navigation.navigate('SignDoc', { ...data });
      }
    }
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled && result.uri) {
      data.headshot_img = result.uri;
      data.roleId = MERCHANT_ROLE_ID;
      if (result.uri) {
        // setVisible(false);
        navigation.navigate('SignDoc', { ...data });
      }
    }
  };
  return (
    <View style={styles.screenContainer}>
      <View style={styles.circleContainer}>
        <Circle textStyle={styles.circletext} text="1" style={styles.circleOne} />
        <View style={styles.lineOne} />
        <Circle textStyle={styles.title} text="2" style={styles.circleTwo} />
        <View style={styles.lineTwo} />
        <Circle textStyle={styles.title} text="3" style={styles.circleThree} />

      </View>
      <View style={styles.circleTextContainer}>
        <Text style={styles.circleTextOne}>Upload Identity</Text>
        <Text style={styles.circleTextTwo}>Upload document</Text>
        <Text style={styles.circleTextThree}>Sign Up</Text>
      </View>
      <View style={styles.cardMainContainer}>
        <View style={styles.cardContainer}>
          <Circle style={styles.insideCardCircle} img={SignUp} />
          <View style={styles.insideCardTextContainer}>
            <Text style={styles.insideCardText}>
              Add the ID of one of the directors that are shown on the chamber of commerce document.
            </Text>
          </View>
          <View style={styles.insideCardChipButtonContainer}>
            <Chipbutton
              testID="upload"
              text="Upload"
              customStyle={styles.insideCardChipButton}
              customText={styles.insideChipButtonText}
              onPress={() => { setVisible(true); }}
            />
          </View>
        </View>
      </View>
      <Modal visible={visibility} style={styles.modal}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={() => { setVisible(false); }} style={styles.modalClose} testID="close">
            <Image source={homeIcon} style={styles.home} />
          </TouchableOpacity>
          <View><Text style={styles.chooseImg}>Choose Image</Text></View>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              testID="camera"
              onPress={() => { openCamera(); setVisible(false); }}
            >
              <View style={styles.cameraView}>
                <Image source={camera} style={styles.cameraImg} />
              </View>
              <Text style={styles.cameraText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              testID="pickImage"
              onPress={() => { pickImage(); setVisible(false); }}
            >
              <View style={styles.galleryView}>
                <Image source={gallery} style={styles.galleryImg} />
              </View>
              <Text style={styles.galleryText}>Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default UploadDoc;
