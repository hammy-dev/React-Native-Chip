import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import AppContainer from '../src/navigations/Stack/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as Linking from 'expo-linking';
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);



const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
beforeAll(()=>{
  Linking.openURL("")
})
describe('<App />', () => {
  it('without  token', async() => {
    jest.spyOn(React, 'useEffect').mockImplementation((f)=>f());
    const store =  mockStore({ });
    const tree = renderer.create(<Provider store={store}><AppContainer /></Provider>).toTree();
    expect(tree).toBeTruthy();
  });

  it('with token', () => {
    jest.spyOn(React, 'useEffect').mockImplementation((f)=>f());
    const store =  mockStore({  userToken: "ssss",userInfo: {profile_image: '123.jpg'},updateUserToken: jest.fn()});
    const tree = renderer.create(<Provider store={store}><AppContainer /></Provider>).toTree();
  
    expect(tree.rendered.nodeType).toBe("component");
  });
});
