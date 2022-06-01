import React, { useState } from 'react';
import {
  Button, Image, View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.ImageUpload1}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.ImageUpload2} />}
    </View>
  );
}
export default ImagePickerExample;
