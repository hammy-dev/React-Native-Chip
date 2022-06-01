import { useEffect, useState } from 'react';
import {
  Text, View, FlatList, Image, RefreshControl,
} from 'react-native';
import SkeletonLoader from 'expo-skeleton-loader';
import AUX from '../../../components/AUX-';
import image from '../../../assets/bankIcon.png';
import { cashOutHistory } from '../../../services/Cashout';
import styles from './styles';
import Colors from '../../../constants/Colors';

function CashHistory() {
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(true);
  const [transData, setTransData] = useState([]);

  const getCashOutHistory = () => {
    setLoading(true);
    cashOutHistory().then((res) => {
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

  useEffect(() => {
    getCashOutHistory();
  }, []);
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
  const onRefresh = () => {
    getCashOutHistory();
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
              keyExtractor={(key) => key.id}
              renderItem={
                (item) => (
                  <TransCard
                    TransDate={
                      tConvert(item.item.created.slice(11, 16).toString())
                    }
                    details={item}
                    status={item.item.status === 'Confirmed'}
                  />
                )
              }
              refreshControl={(
                <RefreshControl
                  // refresh control used for the Pull to Refresh
                  refreshing={refreshing}
                  onRefresh={onRefresh}
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
            source={data.details.item.trans_medium === 'Bank' ? image : image}
            style={styles.mainImage}
          />
        </View>
        <View style={styles.paymentCardContainer}>
          <Text style={styles.PaidRecevieved}>{`Money transfer to bank: NAf ${data.details.item.amount}`}</Text>
          <Text style={styles.TransTime}>
            {`Account no: ***${data.details.item.banknumber.slice(-4)}`}
          </Text>
          <Text style={styles.status(data.status)}>{data.status ? `Status: ${data.details.item.status}` : `Status: ${data.details.item.status}`}</Text>

        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.TransTime}>
            {data.TransDate}
          </Text>
        </View>
      </View>

    </View>
  );
}
export default CashHistory;
