import React from 'react';
import renderer, {act} from 'react-test-renderer';
import Settings from '../src/screens/DrawerScreens/Settings/index';
import {  render, fireEvent } from '@testing-library/react-native';

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
describe('Help', () => {
    it('renders correctly', async() => {
        const mockedParams = {
            navigation: {navigate:jest.fn()}
          };
        const tree = renderer.create( <Settings {...mockedParams} />).toJSON();
        expect(tree.type).toBe( 'View')
        const component = render( <Settings {...mockedParams} />);
        const nextPress = component.getByTestId('changePassword');
        fireEvent.press(nextPress);
        let switchButton = component.getByTestId("switch")
        fireEvent(switchButton, "onValueChange", true);

    });
})