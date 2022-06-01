import { View, ImageBackground } from 'react-native';
import styles from './styles';
import image from '../../assets/bg-img.png';

function AUX({ children, bgColor }) {
  return (
    <ImageBackground
      source={image}
      resizeMode="stretch"
      style={bgColor ? [styles.backgroundImg, { backgroundColor: bgColor }] : styles.backgroundImg}
    >
      <View style={styles.flex}>{children}</View>
    </ImageBackground>
  );
}
export default AUX;
