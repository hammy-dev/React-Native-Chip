import { useRef, useState } from 'react';
import { WebView } from 'react-native-webview';
import LottieView from 'lottie-react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  Text, TouchableOpacity, View,
} from 'react-native';
import loaderJson from '../../assets/loading1.json';
import styles from './styles';

function BankWebview({ navigation, route }) {
  const [show, setShow] = useState(true);
  const animation = useRef(null);
  const url = route.params;
  return (
    <View>

      <View style={styles.container}>
        <View style={styles.innerContainer}>
          {/* {show && <Loader opacity={0.8} loading={show} size="small" color="black" />} */}
          {show && (
            <Spinner
              visible={show}
              customIndicator={(
                <LottieView
                  autoPlay
                  ref={animation}
                  style={styles.loader}
                  source={loaderJson}
                />
              )}
            />
          )}
          <WebView onLoad={() => setShow(false)} style={styles.webView} source={{ uri: url }} />
        </View>
        <TouchableOpacity style={styles.btnContainer} testID="button" onPress={() => { navigation.navigate('Home'); }}>
          <Text style={styles.btnText}>Back to app</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BankWebview;
