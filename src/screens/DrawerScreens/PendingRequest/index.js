import { useState, useEffect } from 'react';
import {
  Text, View, FlatList, Image, RefreshControl,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SkeletonLoader from 'expo-skeleton-loader';
import image from '../../../assets/dummy-pic.jpg';
import { pendingPayments } from '../../../services/Transaction';
import AUX from '../../../components/AUX-';
import styles from './styles';
import Colors from '../../../constants/Colors';

function PendingRequest() {
  const [user, setUser] = useState('');
  const [refreshing, setRefreshing] = useState(true);
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
  useEffect(() => {
    getCompletedPayments();
  }, []);
  useEffect(async () => {
    const u = await AsyncStorage.getItem('userObj');
    const u2 = JSON.parse(u);
    setUser(u2);
  }, []);
  const [transData, setTransData] = useState([]);
  const [loading, setLoading] = useState(false);
  // pendingPayments().then((res)=>{console.log(res.data)})
  const getCompletedPayments = () => {
    setLoading(true);
    pendingPayments().then((res) => {
      if (res.response === 'true') {
        setTransData(res.data);
        setRefreshing(false);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 7000);
      }
    });
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
                  <RequestCard
                    TransDate={
                      tConvert(item.item.requestDate.slice(11, 16).toString())
                    }
                    details={item}
                    Received={user.id !== item.item.requesterid}
                  />
                )
              }
              refreshControl={(
                <RefreshControl
                  // refresh control used for the Pull to Refresh
                  refreshing={refreshing}
                  onRefresh={getCompletedPayments}
                />
              )}
            />
          )
            : (loading
              ? (
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
              : <Text>No Pending Payments</Text>
            )
        }
      </View>
    </AUX>

  );
}
function RequestCard(props) {
  const { details, Received, TransDate } = props;
  return (
    <View style={styles.cardMain}>
      <Text style={styles.cardText}>{details.item.requestDate.slice(0, 10)}</Text>
      <View style={styles.innerCard}>
        <View style={styles.imgTouch}>
          <Image
            source={details.item.requester_image ? { uri: `${details.item.requester_image}` } : image}
            style={styles.mainImage}
          />
        </View>
        <View style={styles.requestText}>
          <Text style={styles.reqinnerText}>{Received ? `Request To: ${details.item.sendername}` : `Request From: ${details.item.requestername}`}</Text>
          {/* <Text>{details.item.sender}</Text> */}
          <Text style={styles.reqinnerText2}>
            {TransDate}
          </Text>
        </View>
        <View style={styles.amountView}>
          <Text style={styles.amount(Received)}>{Received ? `-NAf ${Number(details.item.amount).toFixed(2)}` : `+NAf ${Number(details.item.amount).toFixed(2)}`}</Text>
        </View>
      </View>

    </View>
  );
}

export default PendingRequest;
export { RequestCard };
