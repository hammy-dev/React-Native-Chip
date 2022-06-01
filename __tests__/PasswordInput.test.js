import React from 'react';
import renderer from 'react-test-renderer';

import PasswordInput from '../src/components/Login/PasswordInput';

import {  render, fireEvent } from '@testing-library/react-native';

describe('PasswordInput', () => {
    it('renders correctly', () => {
        const tree = renderer.create( <PasswordInput title={"test"} />).toJSON();
      expect(tree.type).toBe( 'View')
    });
    it('handles onPress', () => {


    const component = render(<PasswordInput />);
    
    const touchableEl = component.getByTestId('testId');
    fireEvent.press(touchableEl);
    expect(touchableEl).toBeTruthy();
    fireEvent.press(touchableEl);
    expect(touchableEl).toBeTruthy();
      });
  });