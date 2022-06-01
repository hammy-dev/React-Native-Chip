import React from 'react';
import renderer from 'react-test-renderer';
import InstructionID from '../src/screens/InstructionID/index';
import {  render, fireEvent } from '@testing-library/react-native';
import * as ImagePicker from 'expo-image-picker';


beforeAll(() => {
  ImagePicker.launchImageLibraryAsync= jest.fn().mockResolvedValue({uri:"55555",cancelled :false});
  ImagePicker.requestCameraPermissionsAsync= jest.fn().mockResolvedValue({uri:"55555",cancelled :false, granted :true});
  ImagePicker.launchCameraAsync= jest.fn().mockResolvedValue({uri:"55555",cancelled :false});
});

describe('InstructionId', () => {
    it('renders correctly',  async() => {
      const mockedParams = {
        route: { params: { currentBid: 'whatever-id' } },
        navigation: {navigate:jest.fn()}
      };
      
      
        const tree = renderer.create(<InstructionID {...mockedParams} />).toJSON();
        expect(tree.children.length).toBe(4);
      
       
        global.fetch = jest.fn().mockImplementation(() => mockFetch);
        const component= render(<InstructionID {...mockedParams} />);
        const nextPress = component.getByTestId('button');
        
        fireEvent.press(nextPress);
        expect(nextPress).toBeTruthy();

        const close = component.getByTestId('close');
        fireEvent.press(close);
        expect(close).toBeTruthy();

        const camera = component.getByTestId('camera');
        fireEvent.press(camera);
        expect(camera).toBeTruthy();

        const pickImage = component.getByTestId('pickImage');
        fireEvent.press(pickImage);
        expect(pickImage).toBeTruthy();

       
    });
  });