import { useState, useEffect } from 'react';
import {
  Text, TouchableOpacity, View, Image, FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import Loader from 'react-native-modal-loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import AUX from '../../components/AUX-';
import Card from '../../components/Card';
import styles from './styles';
import transaction from './data';
import pay from '../../assets/homeicon/ic_pay.png';
import addMoney from '../../assets/homeicon/ic_wallet.png';
import request from '../../assets/homeicon/img_request.png';
import cashout from '../../assets/homeicon/img_cash_out.png';
import homeIcon from '../../assets/homeicon/ic_close_green.png';
import payment from '../../assets/homeicon/img_bill_payment.png';
import filter from '../../assets/homeicon/ic_filter.png';
import CommingSoon from '../../components/commingSoonModal';
import check from '../../assets/checked.png';
import uncheck from '../../assets/uncheck.png';
import Colors from '../../constants/Colors';
import { TransCard } from '../DrawerScreens/CompletePayment';
import { RequestCard } from '../DrawerScreens/PendingRequest';
// Services
import { changeToken, addBalance, setUser } from '../../redux/actions/index';
import { getAvailableBalance, completedPayments, pendingPayments } from '../../services/Transaction';
/* eslint no-nested-ternary: "error" */
function Home({
  navigation, balance, Balance, getUserInfo,
}) {
  // const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [modalVisible, setModelVisible] = useState(false);
  const [visibleBank, setVisibleBank] = useState(false);
  const [filterData, setFilterData] = useState(transaction);
  const [refresh, setRefresh] = useState(false);
  const [categoryData, seteCategoryData] = useState('ALL');
  const [loading, setLoading] = useState(false);
  const [user, setUsers] = useState('');
  const [ReceviedFilter, setReceviedFilter] = useState([]);
  const [PayFilter, setPayFilter] = useState([]);
  const [checkBoxVal, setCheckBox] = useState('');
  const [transData, setTransData] = useState([]);
  const [pendingRequest, setPendingRequest] = useState([]);

  useEffect(() => {
  }, [filterData]);
  useEffect(async () => {
    const u = await AsyncStorage.getItem('userObj');
    const u2 = JSON.parse(u);
    setUsers(u2);
    getUserInfo(u2);
  }, []);

  const checkboxSelect = (item) => {
    setRefresh(!refresh);
    seteCategoryData(item.value);
    filterData.forEach((obj) => {
      obj.checked = obj.value === item.value;
    });
    setFilterData(filterData);
  };
  getAvailableBalance().then((res) => {
    Balance(res.walletbal);
  });

  const toggleBank = () => {
    setVisibleBank(!visibleBank);
  };

  const getPaidPayments = () => {
    setLoading(true);
    const payArray = [];
    completedPayments().then((res) => {
      if (res.response === 'true') {
        setLoading(false);
        setModelVisible(false);
        res.data.forEach((element) => {
          if (element.user_id === user.id) {
            payArray.push(element);
          }
        });
        setPayFilter(payArray);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 7000);
      }
    });
  };
  const getReceviedPayments = () => {
    setLoading(true);
    const ReceviedArray = [];
    completedPayments().then((res) => {
      if (res.response === 'true') {
        setLoading(false);
        setModelVisible(false);
        res.data.forEach((element) => {
          if (element.user_id !== user.id) {
            ReceviedArray.push(element);
          }
        });
        setReceviedFilter(ReceviedArray);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 7000);
      }
    });
  };
  const getAllPayments = () => {
    setLoading(true);
    completedPayments().then((res) => {
      if (res.response === 'true') {
        setModelVisible(false);
        setTransData(res.data);
        setLoading(false);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 7000);
      }
    });
  };
  const getPendingRequest = () => {
    setLoading(true);
    pendingPayments().then((res) => {
      if (res.response === 'true') {
        setModelVisible(false);
        setPendingRequest(res.data);
        setLoading(false);
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

  const filterAPIs = (props) => {
    if (props === 'Paid') {
      setCheckBox(props);
      getPaidPayments();
    }
    if (props === 'Received') {
      setCheckBox(props);
      getReceviedPayments();
    }
    if (props === 'All') {
      setCheckBox(props);
      getAllPayments();
    }
    if (props === 'Request') {
      setCheckBox(props);
      getPendingRequest();
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.section}>
      <TouchableOpacity
        style={styles.imageContainer}
        activeOpacity={0.7}
        onPress={() => { checkboxSelect(item); filterAPIs(item.value); }}
        testID={item.value}
      >
        <Image style={styles.checkboxImage} source={item.checked ? check : uncheck} />
      </TouchableOpacity>
      <Text style={item.checked
        ? [styles.text, { color: Colors.header }]
        : styles.text}
      >
        {item.value}

      </Text>
    </View>
  );
  /* eslint no-nested-ternary:0 */
  return (
    <AUX>
      <View style={styles.mainContainer}>

        {/* Card Section */}

        <View style={styles.mainView}>
          <Text style={styles.availableBalance}>Available Balance</Text>
          <Text style={styles.naf}>
            {`NAf ${balance}`}
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <Card title="PAY" uri={pay} width={43} height={60} testID="pay" onPress={() => { navigation.navigate('PayScreen'); }} />
          <Card title="Add Money" uri={addMoney} width={55} testID="money" height={50} onPress={() => { navigation.navigate('AddMoney'); }} />
        </View>
        <View style={styles.cardContainer}>
          <Card title="Request" uri={request} width={60} height={60} testID="request" onPress={() => { navigation.navigate('Request'); }} />
          <Card title="Cash Out" uri={cashout} width={60} height={60} onPress={() => { navigation.navigate('CashOut'); }} testID="cashout" />
        </View>

        {/* Bill Payment Section */}

        <TouchableOpacity activeOpacity={0.7} style={styles.billPayment} testID="image" onPress={() => { setVisibleBank(true); }}>
          <Image source={payment} style={styles.billPaymentStyle} />
          <Text style={styles.billPaymentText}>
            Bill Payment
          </Text>
        </TouchableOpacity>

        {/* Filter + Transaction Section */}

        <View style={[styles.billPayment, styles.billtransaction]}>
          <TouchableOpacity
            testID="billTransaction"
            style={styles.filterBtn}
            onPress={() => { setModelVisible(true); }}
            activeOpacity={0.7}
          >
            <Image source={filter} style={styles.imageStyle} />
          </TouchableOpacity>
          <Text style={styles.text1}>{categoryData}</Text>
          <View style={styles.checkContainer}>
            {(checkBoxVal === 'Paid' || checkBoxVal === 'Received' || checkBoxVal === 'All') ? (
              <FlatList
                style={styles.flatList}
                data={(checkBoxVal === 'Paid' && PayFilter)
                  || (checkBoxVal === 'Received' && ReceviedFilter)
                  || (checkBoxVal === 'All' && transData)}
                keyExtractor={(key) => key.id.toString()}
                renderItem={
                  (item) => (

                    <TouchableOpacity>
                      <TransCard
                        TransDate={
                          tConvert(item.item.created.slice(11, 16).toString())
                        }
                        i
                        details={item}
                        Received={(checkBoxVal === 'Paid' && true)
                          || (checkBoxVal === 'Received' && false)
                          || (checkBoxVal === 'All' && (user.id === item.item.user_id))}
                      />
                    </TouchableOpacity>

                  )

                }
              />
            )
              : checkBoxVal === 'Request'
                ? (
                  <FlatList
                    style={styles.flatList}
                    data={pendingRequest}
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
                  />
                )
                : <Text style={styles.text2}>NO TRANSACTION FOUND</Text>}
          </View>
        </View>
      </View>

      {/* Filter Model */}
      <Modal isVisible={modalVisible} style={styles.modal} transparent>
        <View
          style={styles.modalView}
        >
          <TouchableOpacity onPress={() => { setModelVisible(false); }} style={styles.modalClose} testID="close">
            <Image source={homeIcon} style={styles.home} />
          </TouchableOpacity>
          <Text style={styles.modalHeader}>Filter Transaction</Text>
          <View style={styles.flatList}>
            <FlatList
              data={filterData}
              keyExtractor={(trans) => trans.id}
              renderItem={renderItem}
              refreshing={refresh}
            />
          </View>
        </View>
      </Modal>

      {visibleBank
        && (
          <CommingSoon
            height="37%"
            text={(
              <View>
                <Text style={styles.headerBank}>THIS FEATURE IS LAUNCHING SOON</Text>
                <Text style={styles.paraBank}>
                  This feature will let you pay your bills directy from your E-wallet.
                  You will get notified as soon this feature is live.

                </Text>
              </View>
            )}
            button={(
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.closeModal}
                  activeOpacity={0.7}
                  testID="button"
                  onPress={() => {
                    toggleBank();
                  }}
                >
                  <Text style={styles.closeModalText}>Back</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      {loading && <Loader opacity={0.8} loading={loading} size="small" color="black" />}
    </AUX>
  );
}

const mapStateToProps = (state) => ({
  userToken: state.userToken,
  balance: state.balance,
  userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserToken: (value) => dispatch(changeToken(value)),
  Balance: (value) => dispatch(addBalance(value)),
  getUserInfo: (value) => dispatch(setUser(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
