import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AUX from '../../../components/AUX-/index';
import data from './data';
import styles from './styles';

function Help({ navigation }) {
  const openView = (item) => {
    navigation.navigate(item.screenName);
  };

  return (
    <AUX>
      <View>
        {
        data && data.map((element) => (
          <TouchableOpacity
            key={element.name}
            testID={element.testID}
            onPress={() => { openView(element); }}
            activeOpacity={1}
          >
            <View style={{
              ...styles.innerContainer,
            }}
            >
              <Text style={{ ...styles.textStyle }}>
                {element.name}
                {' '}
              </Text>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </TouchableOpacity>

        ))

      }
      </View>

    </AUX>
  );
}

export default Help;
