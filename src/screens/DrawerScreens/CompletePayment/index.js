import { useEffect, useState } from 'react';
import {
  Text, View, FlatList, Image, TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SkeletonLoader from 'expo-skeleton-loader';
import AUX from '../../../components/AUX-';
import image from '../../../assets/dummy-pic.jpg';
import { completedPayments } from '../../../services/Transaction';
import styles from './styles';
import Colors from '../../../constants/Colors';
// import SelectedPayment from '../../screens/DrawerScreens/selectedPayment';

function CompletePayment({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [transData, setTransData] = useState([]);
  const [user, setUser] = useState('');
  useEffect(() => {
    getCompletedPayments();
  }, []);
  useEffect(async () => {
    const u = await AsyncStorage.getItem('userObj');
    const u2 = JSON.parse(u);
    setUser(u2);
  }, []);
  const getCompletedPayments = () => {
    setLoading(true);
    completedPayments().then((res) => {
      if (res.response === 'true') {
        setTransData(res.data);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 7000);
      }
    });
  };
  function tConvert(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }
  const selected = (item) => {
    navigation.navigate('selectedPayment', { item });
  };
  /* eslint no-nested-ternary:0 */
  return (
    <AUX>
      <View style={styles.mainCard}>
        {
          transData.length ? (
            <FlatList
              style={styles.flatList}
              data={transData}
              keyExtractor={(key) => key.id.toString()}
              renderItem={
                (item) => (
                  <TouchableOpacity onPress={() => { selected(item); }}>
                    <TransCard
                      TransDate={
                        tConvert(item.item.created.slice(11, 16).toString())
                      }
                      i
                      details={item}
                      Received={user.id === item.item.user_id}
                    />
                  </TouchableOpacity>

                )

              }

            />
          )
            : (loading
              ? (
                // <ActivityIndicator style={styles.ActivityIndicator} color="black" size="large" />
                <SkeletonLoader
                  boneColor={Colors.lightestGrey}
                  highlightColor={Colors.grey}
                  style={styles.loaderStyle}
                >
                  <SkeletonLoader.Container
                    style={styles.loaderContainer}
                  >
                    <SkeletonLoader.Item
                      style={styles.loaderItemAvatar}
                    />
                    <SkeletonLoader.Container>
                      <SkeletonLoader.Item
                        style={styles.loaderItemLine}
                      />
                      <SkeletonLoader.Item style={styles.loaderSecondLine} />
                      <SkeletonLoader.Item style={styles.loaderThirdLine} />
                    </SkeletonLoader.Container>
                  </SkeletonLoader.Container>
                  <SkeletonLoader.Container
                    style={styles.loaderContainer}
                  >
                    <SkeletonLoader.Item
                      style={styles.loaderItemAvatar}
                    />
                    <SkeletonLoader.Container>
                      <SkeletonLoader.Item
                        style={styles.loaderItemLine}
                      />
                      <SkeletonLoader.Item style={styles.loaderSecondLine} />
                      <SkeletonLoader.Item style={styles.loaderThirdLine} />
                    </SkeletonLoader.Container>
                  </SkeletonLoader.Container>
                  <SkeletonLoader.Container
                    style={styles.loaderContainer}
                  >
                    <SkeletonLoader.Item
                      style={styles.loaderItemAvatar}
                    />
                    <SkeletonLoader.Container>
                      <SkeletonLoader.Item
                        style={styles.loaderItemLine}
                      />
                      <SkeletonLoader.Item style={styles.loaderSecondLine} />
                      <SkeletonLoader.Item style={styles.loaderThirdLine} />
                    </SkeletonLoader.Container>
                  </SkeletonLoader.Container>
                  <SkeletonLoader.Container
                    style={styles.loaderContainer}
                  >
                    <SkeletonLoader.Item
                      style={styles.loaderItemAvatar}
                    />
                    <SkeletonLoader.Container>
                      <SkeletonLoader.Item
                        style={styles.loaderItemLine}
                      />
                      <SkeletonLoader.Item style={styles.loaderSecondLine} />
                      <SkeletonLoader.Item style={styles.loaderThirdLine} />
                    </SkeletonLoader.Container>
                  </SkeletonLoader.Container>
                  <SkeletonLoader.Container
                    style={styles.loaderContainer}
                  >
                    <SkeletonLoader.Item
                      style={styles.loaderItemAvatar}
                    />
                    <SkeletonLoader.Container>
                      <SkeletonLoader.Item
                        style={styles.loaderItemLine}
                      />
                      <SkeletonLoader.Item style={styles.loaderSecondLine} />
                      <SkeletonLoader.Item style={styles.loaderThirdLine} />
                    </SkeletonLoader.Container>
                  </SkeletonLoader.Container>
                  <SkeletonLoader.Container
                    style={styles.loaderContainer}
                  >
                    <SkeletonLoader.Item
                      style={styles.loaderItemAvatar}
                    />
                    <SkeletonLoader.Container>
                      <SkeletonLoader.Item
                        style={styles.loaderItemLine}
                      />
                      <SkeletonLoader.Item style={styles.loaderSecondLine} />
                      <SkeletonLoader.Item style={styles.loaderThirdLine} />
                    </SkeletonLoader.Container>
                  </SkeletonLoader.Container>
                </SkeletonLoader>
              )
              : <Text>No Completed Payments</Text>
            )

        }
      </View>
    </AUX>
  );
}
function TransCard(props) {
  // const {created,sender_image,receiver_name,amount,sender} = props.details.item;
  const data = props;
  return (
    <View style={styles.transCardContainer}>
      <Text style={styles.transDate}>{data.details.item.created.slice(0, 10)}</Text>
      <View style={styles.imgContainer}>
        <View style={styles.imgTouch}>
          <Image
            source={data.details.item.sender_image ? { uri: `${data.details.item.sender_image}` } : image}
            style={styles.mainImage}
          />
        </View>
        <View style={styles.paymentCardContainer}>
          <Text style={styles.PaidRecevieved}>{data.Received ? `PAID TO: ${data.details.item.receiver_name}` : `RECEIVED FROM: ${data.details.item.sender}`}</Text>
          <Text style={styles.TransTime}>
            {data.TransDate}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount(data.Received)}>{data.Received ? `-NAf ${Number(data.details.item.amount).toFixed(2)}` : `+NAf ${Number(data.details.item.amount).toFixed(2)}`}</Text>
        </View>
      </View>
    </View>
  );
}
export default CompletePayment;
export { TransCard };
