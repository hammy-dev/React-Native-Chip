import { Text, View, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { connect } from 'react-redux';
import styles from './styles';
import shareIcon from '../../../assets/icons8-share-32.png';
import { setUser } from '../../../redux/actions/index';
import downloadIcon from '../../../assets/downloadIcon.png';

function MyQRCode({ userInfo }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {userInfo.username}
        </Text>
        <Text style={styles.textMobNum}>
          {userInfo.country_code}
          {userInfo.mob_num}
        </Text>
      </View>
      <View style={styles.qrContainer}>
        <QRCode
          value="chipreactnative://Request"
          size={250}
          color="black"
          backgroundColor="white"
          logo={{
            url:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
          }}
          logoSize={30}
          logoMargin={2}
          logoBorderRadius={15}
          logoBackgroundColor="yellow"
        />
      </View>
      <View style={styles.actionsButtons}>
        <Image source={downloadIcon} />
        <View style={styles.gapper} />
        <Image source={shareIcon} />
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: (value) => dispatch(setUser(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyQRCode);
