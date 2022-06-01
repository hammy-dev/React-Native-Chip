import {
  View, Text, TouchableOpacity, Switch,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import AUX from '../../../components/AUX-/index';
import data from './data';
import styles from './styles';

function Settings({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  useEffect(async () => {
    const isPin = await AsyncStorage.getItem('isPinSet');
    const isPinJson = JSON.parse(isPin);
    setIsEnabled(isPinJson.isPin);
  }, [isEnabled]);
  const toggleSwitch = async () => {
    setIsEnabled((previousState) => !previousState);
    await AsyncStorage.setItem('isPinSet', JSON.stringify({ isPin: !isEnabled }));
  };
  const openView = (item) => {
    if (item.screenName) {
      navigation.navigate(item.screenName);
    }
  };
  return (
    <AUX>
      <View>
        {
          data && data.map((element) => {
            if (element.screenName || element.disabled) {
              return (
                <TouchableOpacity
                  key={element.name}
                  testID={element.screenName}
                  onPress={() => { openView(element); }}
                >
                  <View style={{
                    ...styles.innerContainer,
                  }}
                  >
                    <Text style={element.disabled
                      ? { ...styles.textStyle, ...styles.textStyleDisabled }
                      : { ...styles.textStyle }}
                    >
                      {element.name}
                    </Text>
                    <AntDesign name="right" size={24} color={element.disabled ? '#ccc' : 'black'} />
                  </View>
                </TouchableOpacity>
              );
            }

            return (
              <View
                key={element.name}
                style={{ ...styles.innerContainer }}
              >
                <Text style={{ ...styles.textStyle }}>
                  {element.name}
                </Text>
                <View style={{ ...styles.toggleStyle }}>
                  <Switch
                    testID="switch"
                    trackColor={{ false: '#767577', true: '#35c759' }}
                    thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </View>

            );
          })

        }
      </View>

    </AUX>
  );
}

export default Settings;
