import { useState } from 'react';
import {
  View, Text, TouchableOpacity, Image, Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Modal from 'react-native-modal';
import Chipbutton from '../../components/buttons/index';
import Circle from '../../components/Circles/index';
import styles from './style';
import SignUp from '../../assets/SignUp/signup4.png';
import homeIcon from '../../assets/homeicon/ic_close_green.png';
import camera from '../../assets/camera.png';
import gallery from '../../assets/gallery.png';

function InstructionID({ navigation, route }) {
  const [visibility, setVisible] = useState(false);
  const data = route.params;
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled && result.uri) {
      data.identity_img = result.uri;
      navigation.navigate('UploadDoc', { ...data });
    }
  };
  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      const localUri = result.uri;
      if (localUri) {
        data.identity_img = localUri;
        navigation.navigate('UploadDoc', { ...data });
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
          <View>
            <Circle style={styles.insideCardCircle} img={SignUp} />
          </View>
          <View style={styles.insideCardTextContainerOne}>
            <Text style={styles.insideCardTextOne}>
              Upload a picture of the directors ID/
              {'\n'}
              {' '}
              Driver License or Passport
            </Text>
          </View>

          <View style={styles.insideCardChipButtonContainer}>
            <Chipbutton
              text="Upload"
              testID="button"
              customStyle={styles.insideCardChipButton}
              customText={styles.insideChipButtonText}
              // onPress={() => { pickImage(); }}
              onPress={() => { setVisible(true); }}
              activeOpacity={0.7}
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
            <TouchableOpacity activeOpacity={0.7} testID="camera" onPress={() => { openCamera(); }}>
              <View style={styles.cameraView}>
                <Image source={camera} style={styles.cameraImg} />
              </View>
              <Text style={styles.cameraText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} testID="pickImage" onPress={() => { pickImage(); }}>
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

export default InstructionID;
