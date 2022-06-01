import React from 'react';
import { View } from 'react-native';
import styles from './style';

function Dropdown({ mainContainerStyle, pickerContainerStyle }) {
  // const [selectedValue, setSelectedValue] = useState('Type of Business');

  return (
    <View style={[styles.mainContainer, { ...mainContainerStyle }]}>
      <View style={[styles.Pickercontainer, { ...pickerContainerStyle }]}>

        {/* <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          style={[styles.picker, { ...props.pickerStyle }]}
        >
          <Picker.Item label="Type of Business" value="Type of Business" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker> */}
      </View>
    </View>

  );
}

export default Dropdown;
