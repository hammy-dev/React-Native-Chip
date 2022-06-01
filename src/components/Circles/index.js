import { View, Text, Image } from 'react-native';
import styles from './styles';

function Circle({
  style, text, textStyle, img,
}) {
  return (

    <View style={{ ...styles.circle, ...style }}>

      {img
        ? <Image source={img} style={style.img} />
        : <Text style={{ ...textStyle }}>{text}</Text>}
    </View>

  );
}
export default Circle;
