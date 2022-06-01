import {
  View, TouchableOpacity, Text, Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import image from '../../assets/dummy-pic.jpg';

function CardImage({
  userId, name, phone, uri,
}) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.imgDiv}
        testID="click"
        onPress={() => {
          navigation.navigate('AmountDetail', {

            userId,
            name,
            phone,
            uri,
          });
        }}
      >
        <Image
          source={uri ? { uri: `${uri}` }
            : image}
          style={styles.img}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}
export default CardImage;
