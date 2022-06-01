import { WebView } from 'react-native-webview';
import AUX from '../../../components/AUX-/index';
import styles from './styles';
import htmlConstants from '../../../constants/htmlConstants';

function Faqs() {
  return (
    <AUX>
      <WebView style={styles.container} source={{ html: htmlConstants.FAQ }} />
    </AUX>
  );
}

export default Faqs;
