import React from 'react';
import renderer from 'react-test-renderer';
import CardImage from '../src/components/imageCard/index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {  render, fireEvent } from '@testing-library/react-native';

jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(),
  }));

  configure({ adapter: new Adapter() });
  const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => (
  { useNavigation: () => ({ navigate: mockedNavigate }) }));
describe('CardImage', () => {
    it('renders correctly with image', () => {
        const tree = renderer.create(<CardImage name="test" phone="111" uri="sssss" />).toJSON();
      expect(tree.type).toBe( 'View')
  
    });
    it('renders correctly without image', () => {
    
    const tree = renderer.create(<CardImage name="test" phone="111"  />).toJSON();
    expect(tree.type).toBe( 'View')
    const navigation = { navigate: jest.fn() };
    const component= render(<CardImage name="test" phone="111" navigation={navigation} />);
            const nextPress = component.getByTestId('click');
            fireEvent.press(nextPress);
            expect(nextPress).toBeTruthy();
  });
  });