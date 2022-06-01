import React, { useEffect } from 'react';
import renderer from 'react-test-renderer';
import UserSignUp5 from '../src/screens/SignUp/UserSignUp5/index';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as ImagePicker from 'expo-image-picker';
import {  render, fireEvent } from '@testing-library/react-native';

beforeAll(() => {
  ImagePicker.launchImageLibraryAsync= jest.fn().mockResolvedValue({uri:"55555",cancelled :false});
});
configure({ adapter: new Adapter() });
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

describe('UserSignUp5', () => {
    it('renders correctly', () => {
        jest.spyOn(React, 'useEffect').mockImplementation((f)=>f());
        const tree = renderer.create(<UserSignUp5 route={{params: 'some param'}} />).toJSON();
            expect(tree.type).toBe("View");
            global.fetch = jest.fn().mockImplementation(() => mockFetch);
            const component= render(<UserSignUp5 route={{params: 'some param'}} />);
            const nextPress = component.getByTestId('button');
            fireEvent.press(nextPress);
            expect(nextPress).toBeTruthy();
    })
});
   
