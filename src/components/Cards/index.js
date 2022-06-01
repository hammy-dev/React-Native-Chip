import { View } from 'react-native';
import styles from './style';

function Card({ children, Cardstyle, style }) {
  return (
    <View style={{ height: Cardstyle, ...styles.innerContainer, ...style }}>
      {children}
    </View>

  );
}
export default Card;
