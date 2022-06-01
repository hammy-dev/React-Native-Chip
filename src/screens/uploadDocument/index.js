import {
  Text, View,
} from 'react-native';
import styles from './style';
import Chipbutton from '../../components/buttons/index';

function UploadDocs() {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.mainCircleContainer}>
        <View style={styles.circleOne}>
          <Text style={styles.circleOneText}>1</Text>
        </View>
        <Text style={styles.firstLine} />
        <View style={styles.circleTwo}>
          <Text style={styles.circleTwoText}>2</Text>
        </View>
        <Text style={styles.secondLine} />
        <View style={styles.circleThree}>
          <Text style={styles.circleThreeText}>3</Text>
        </View>
      </View>
      <View style={styles.instructionTextContainer}>
        <Text style={styles.instructionText}>Instruction</Text>
      </View>
      <View style={styles.uploadTextContainer}>
        <Text style={styles.uploadText}>Upload document</Text>
      </View>
      <View style={styles.signupTextContainer}>
        <Text style={styles.signupText}>Sign Up</Text>
      </View>

      <View style={[styles.billPayment, styles.billtransaction]}>
        <View style={styles.Cardcircle} />
        <View style={styles.ButtonContainer}>
          <Text style={styles.textboxOne}>Upload a picture of the director&apos;s ID/ </Text>
          <Text style={styles.textboxTwo}>Driver License or Passport</Text>
          <Chipbutton text="Upload" customStyle={styles.SignupUserButton} customText={styles.SignupUserText} />
        </View>

      </View>

    </View>
  );
}

export default UploadDocs;
