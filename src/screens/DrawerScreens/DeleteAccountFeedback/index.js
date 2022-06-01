import { Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import style from './styles';
import Chipbutton from '../../../components/buttons/index';

function DeleteAccountFeedback({ navigation, route }) {
  const reason = route.params;
  const [description, setDescription] = useState('');
  return (
    <View style={{ ...style.container }}>
      <View style={{ ...style.innerContainer, ...style.firstScreenNextButton }}>
        <View style={{ ...style.textView }}>
          <Text style={style.textAreaNote}>
            Can you please share with us what was not working?
            We are fixing bugs as soon as we spot them. If something slipped through our fingers.
            We&apos;d be so grateful to be aware of it and fix it.
            Help us offer a better sevice. You feed back matters.
            {' '}

          </Text>
        </View>

        <View style={style.textAreaContainer}>
          <TextInput
            style={style.textArea}
            underlineColorAndroid="transparent"
            placeholder="Your explanation is entirely optional..."
            placeholderTextColor="grey"
            numberOfLines={10}
            onChangeText={setDescription}
            multiline
          />
        </View>
        <Chipbutton
          text="CONTINUE"
          customStyle={style.Createbutton}
          customText={style.CreateAccountText}
          testID="button"
          onPress={() => { navigation.navigate('deleteAccountLast', { reason, description }); }}
        />

      </View>
    </View>
  );
}

export default DeleteAccountFeedback;
