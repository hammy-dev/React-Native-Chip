import { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Image, AppState, BackHandler, Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomDrawer from '../../components/CustomDrawer';
import data from './data';
import styles from './styles';
import Colors from '../../constants/Colors';
import homeImg from '../../assets/drawericon/home.png';
import logoText from '../../assets/logo_text.png';
import HOME from '../../screens/Home';

const Drawer = createDrawerNavigator();
/* eslint react/no-unstable-nested-components:0 */

function ChipDrawer({ navigation }) {
  useEffect(() => {
    AppState.addEventListener('change', async (nextAppState) => {
      if (nextAppState === 'background') {
        const pinCheck = await AsyncStorage.getItem('isPinSet');
        const pinCheckJson = JSON.parse(pinCheck);
        if (pinCheckJson.isPin) {
          setTimeout(async () => {
            navigation.navigate('PIN');
          }, 2000);
        }
      }
    });
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => backHandler.remove();
  }, []);

  return (

    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HOME}
        options={() => ({
          drawerIcon: () => <Image source={homeImg} style={styles.img} />,
          drawerItemStyle: {
            marginLeft: 10, borderBottomWidth: 1, borderBottomColor: '#929292', marginVertical: 1,
          },
          drawerLabelStyle: { marginLeft: -10, fontSize: 12 },
          headerStyle: { backgroundColor: Colors.header },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitle: () => (<Image style={styles.logoText} resizeMode="stretch" source={logoText} />),
        })}
      />
      {
        data && data.map((element) => (
          <Drawer.Screen
            key={element.name}
            name={element.name}
            component={element.Component}
            options={() => ({
              drawerIcon: () => <Image source={element.uri} style={styles.img} />,
              drawerItemStyle: {
                marginLeft: 10, borderBottomWidth: 1, borderBottomColor: '#929292', marginVertical: 1,
              },
              drawerLabelStyle: { marginLeft: -10, fontSize: 12 },
              headerStyle: { backgroundColor: Colors.header },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: { width: '100%' },
              headerTitle: () => (
                <Text style={styles.headerTextStyle} numberOfLines={2}>
                  {element.name}
                </Text>
              ),
            })}
          />
        ))

      }

    </Drawer.Navigator>

  );
}

export default ChipDrawer;
