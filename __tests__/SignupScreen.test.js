import React from 'react';
import renderer from 'react-test-renderer';

import SignUp from '../src/screens/SignUp/index';

import {  render, fireEvent } from '@testing-library/react-native';



describe('Signup', () => {
    it('renders correctly', () => {
        const tree = renderer.create( <SignUp />).toJSON();
      expect(tree.type).toBe( 'View')
    });
    it('handles onPress', () => {

        const navigation = { navigate: jest.fn() };
    const component = render(<SignUp navigation={navigation}/>);
    
    const userPress = component.getByTestId('User');
    fireEvent.press(userPress);
    expect(userPress).toBeTruthy();
    const merchantPress = component.getByTestId('Merchant');
    fireEvent.press(merchantPress);
    expect(merchantPress).toBeTruthy();

    const loginPress = component.getByText('Back to login!');
    fireEvent.press(loginPress);
    expect(loginPress).toBeTruthy();
      });
  });