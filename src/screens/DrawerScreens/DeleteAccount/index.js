import { Text, View } from 'react-native';
import React, { useState } from 'react';
import RadioButtonRN from 'radio-buttons-react-native-expo';
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button';
import style from './styles';
import data from './data';
import Chipbutton from '../../../components/buttons/index';
import Colors from '../../../constants/Colors';

function DeleteAccount({ navigation }) {
  const [checked, setChecked] = useState('first');
  const [current, setCurrent] = useState('test');
  return (
    <View style={{ ...style.container }}>
      <View style={{ ...style.innerContainer }}>
        <Text style={{ ...style.headingText }}>We&apos;re Sad To See You Go </Text>
        <View style={{ ...style.radioButtonContainer }}>
          <RadioButtonRN
            activeColor={Colors.header}
            circleSize={15}
            box={false}
            data={data}
            selectedBtn={(e) => setChecked(e.label)}
          />
          <RadioButtonGroup
            containerStyle={{ marginBottom: 10 }}
            selected={current}
            onSelected={(value) => setCurrent(value)}
            radioBackground="green"
          >
            <RadioButtonItem value="test2" label="Example with string" />
            <RadioButtonItem
              value="test"
              label={
                <Text style={{ color: "red" }}>Example passing React Element</Text>
              }
            />
          </RadioButtonGroup>
        </View>
        <View style={{ ...style.firstScreenNextButton }}>
          <Chipbutton
            text="Next"
            customStyle={style.Createbutton}
            customText={style.CreateAccountText}
            testID="button"
            onPress={() => { navigation.navigate('deleteAccountFeedback', checked); }}
          />
        </View>
      </View>
    </View>
  );
}

export default DeleteAccount;
