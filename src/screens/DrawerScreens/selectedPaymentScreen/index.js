import {
  Text, View, Image,
} from 'react-native';
import AUX from '../../../components/AUX-';
import styles from './styles';
import image from '../../../assets/dummy-pic.jpg';
import tickImage from '../../../assets/ic_alert_shield.png';

function SelectedPayment({ route }) {
  const params = route.params.item.item;
  return (
    <AUX>
      <View style={styles.card}>
        <View style={styles.innerContainer1}>
          <View style={styles.profileView}><Image source={image} resizeMode="contain" style={styles.profileImage} /></View>
          <View style={styles.textView1}>
            <Text style={styles.Naf}>
              NAf
              {params.amount}
            </Text>
            <Text style={styles.Received}>
              Received from
              {params.receiver_name}
            </Text>
          </View>
          <View style={styles.secondContainer}>
            <View style={styles.innerContainer}>
              <Image source={tickImage} resizeMode="contain" style={styles.logo} />
              <Text style={styles.data}>{params.created.slice(0, 10)}</Text>
              <Text style={styles.time}>{params.created.slice(10, 19)}</Text>
            </View>
            <View style={styles.textView}>
              <Text style={styles.text}>UPI TRansactio id </Text>
              <Text style={styles.text1}>
                {params.trans_id}
                {' '}
              </Text>
              <Text style={styles.text}>
                Description:
                {params.description}
              </Text>
            </View>
          </View>

        </View>
      </View>
    </AUX>
  );
}

export default SelectedPayment;
