import React, { useEffect } from 'react';
import renderer from 'react-test-renderer';
import MarchantSignUpTwo from '../src/screens/marchantSignUpTwo/index';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {  render, fireEvent } from '@testing-library/react-native';
configure({ adapter: new Adapter() });
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

describe('MarchantSignUpTwo', () => {
    it('renders correctly', () => {
      const mockedParams = {
        route: { params: { currentBid: 'whatever-id' } },
        navigation: {navigate:jest.fn()}
      };
        jest.spyOn(React, 'useEffect').mockImplementation((f)=>f());
        const tree = renderer.create(< MarchantSignUpTwo {...mockedParams} />).toJSON();
            expect(tree.type).toBe("View");
           
    })

    it('click button', () => {
      const mockedParams = {
        route: { params: { currentBid: 'whatever-id' } },
        navigation: {navigate:jest.fn()}
      };
      const component= render(<MarchantSignUpTwo {...mockedParams} />);
      const nextPress = component.getByTestId('button');
      fireEvent.press(nextPress);
      const input = component.getByTestId('input');
      fireEvent.changeText(input,"abc");
      const navigate = component.getByTestId('navigate');
      fireEvent.press(navigate);
      expect(nextPress).toBeTruthy();
    
    })
    });
   
