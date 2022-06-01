import { Provider } from 'react-redux';
import AppContainer from './src/navigations/Stack/index';
import store from './src/redux/store';
// import ChipDrawer from './src/navigations/Drawer';

export default function App() {
  return (

    // <ChipDrawer />
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
