import React from 'react';
import renderer from 'react-test-renderer';
import UploadDocs from '../src/screens/uploadDocs/index';
import {  render, fireEvent } from '@testing-library/react-native';
import * as ImagePicker from 'expo-image-picker';


jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
const mockedParams = {
  route: { params: { currentBid: 'whatever-id' } },
  navigation: {navigate:jest.fn()}
};

describe('UploadDocs', () => {

  beforeAll(() => {
    ImagePicker.requestCameraPermissionsAsync= jest.fn().mockResolvedValue({uri:"55555",cancelled :false});
    ImagePicker.launchCameraAsync= jest.fn().mockResolvedValue({uri:"55555",cancelled :false});
    ImagePicker.launchImageLibraryAsync =jest.fn().mockResolvedValue({uri:"55555",cancelled :false});
  });
  it('testClick functionality', () => {
      
    const component= render(<UploadDocs  {...mockedParams} />);
    const nextPress = component.getByTestId('upload');
    fireEvent.press(nextPress);
    const close = component.getByTestId('close');
    fireEvent.press(close);
    const camera = component.getByTestId('camera');
    fireEvent.press(camera);
    const pickImage = component.getByTestId('pickImage');
    fireEvent.press(pickImage);
      
  });
});
describe('UploadDocs Renderer', () => {
    it('renders correctly', () => {
       
        const tree = renderer.create(<UploadDocs {...mockedParams} />).toJSON();
            expect(tree.type).toBe("View");
    });
});