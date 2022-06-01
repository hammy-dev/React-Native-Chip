import {
  Image, View,
} from 'react-native';
/* redux import */

// import { connect } from 'react-redux';
/* redux actions */
// import { incNumber } from '../../redux/actions';
// import { decNumber } from '../../redux/actions';

/* custom component */
import AUX from '../../components/AUX-/index';
import Chipbutton from '../../components/buttons/index';
import LinkText from '../../components/LinkText';
import styles from './style';
import image from '../../../assets/Chip-Logo.png';

function SignUp({ navigation }) {
  return (
    <AUX>

      <View style={styles.mainContainer}>
        <View style={styles.imageView}>
          <Image style={styles.tinyLogo} source={image} />
        </View>
        <View style={styles.cardContainer}>
          <Chipbutton
            text="Sign up as a User"
            testID="User"
            customStyle={styles.SignupUserButton}
            customText={styles.SignupUserText}
            onPress={() => { navigation.navigate('UserSignUp1', { data: 'user' }); }}
            activeOpacity={0.7}
          />
          <Chipbutton
            text="Sign up as Merchant"
            testID="Merchant"
            customStyle={styles.SignupMerchantButton}
            customText={styles.SignupMerchantText}
            onPress={() => { navigation.navigate('UserSignUp1', { data: 'merchant' }); }}
            activeOpacity={0.7}
          />
          <LinkText
            text="Back to login!"
            onPress={() => {
              navigation.navigate('Login');
            }}
            customStyle={styles.linkText}
          />
        </View>
      </View>

    </AUX>
  );
}

// const mapStateToProps = (state) => ({
//   countNum: state,
// });

// const mapDispatchToProps = (dispatch) => ({
//   incNum: (props) => dispatch(incNumber(props)),
//   decNum: () => dispatch(decNumber()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignUp;
