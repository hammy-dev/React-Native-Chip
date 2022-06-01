import { WebView } from 'react-native-webview';
import styles from './styles';

function MarchantTopUp() {
  return (
    <WebView style={styles.container} source={{ uri: 'https://chipcuracao.com/merchants/' }} />
  );
}

export default MarchantTopUp;
