import { WebView } from 'react-native-webview';
import styles from './styles';
import AUX from '../../../components/AUX-/index';
import htmlConstants from '../../../constants/htmlConstants';

function TermsAndConditions() {
  return (

    <AUX>
      <WebView style={styles.container} source={{ html: htmlConstants.TERMS_CONDITIONS }} />
    </AUX>
  );
}

export default TermsAndConditions;
