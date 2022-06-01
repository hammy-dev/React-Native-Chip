import {
  View, Text, ImageBackground,
} from 'react-native';
import Chipbutton from '../../../components/buttons/index';
import styles from './styles';
import Card from '../../../components/Cards';
import AUX from '../../../components/AUX-';

const image = require('../../../assets/SignUp/signup1.png');

function UserSignUp1({ navigation, route }) {
  const navigate = () => {
    if (route.params.data === 'user') {
      navigation.navigate('UserSignUp2', { data: 'user' });
    } else {
      navigation.navigate('UserSignUp2', { data: 'merchant' });
    }
  };
  return (

    <AUX>
      <View style={styles.mainContanier}>
        <View style={styles.secondContainer}>
          <Card>
            <View style={styles.cardInnerContainer}>
              <View style={styles.textContainer}>
                {route.params.data === 'user'
                  ? (
                    <Text style={styles.text}>
                      Welcome!
                      {'\n'}
                      {' '}
                      This a 3 step process, where we
                      {'\n'}
                      {' '}
                      will help you setup an account
                    </Text>
                  )
                  : (
                    <Text style={styles.text}>
                      Welcome!
                      {'\n'}
                      {' '}
                      This a 3 step process, where we
                      {'\n'}
                      {' '}
                      will help you setup a business
                      {'\n'}
                      account
                    </Text>
                  )}
              </View>
              <View style={styles.ImageBackgroundContainer}>

                <ImageBackground source={image} style={styles.Image} />
              </View>
            </View>
          </Card>

        </View>
        <View style={styles.ButtonContainer}>
          <Chipbutton
            text="NEXT"
            customStyle={styles.customStyle}
            testID="button"
            customText={{ fontSize: 22 }}
            onPress={() => { navigate(); }}
            activeOpacity={0.7}
          />
        </View>
      </View>

    </AUX>
  );
}
// #9e9e9e
export default UserSignUp1;
