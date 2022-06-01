import React from 'react';
import renderer from 'react-test-renderer';
import UserSignUp1 from '../src/screens/SignUp/UserSignUp1/index';
import {  render, fireEvent } from '@testing-library/react-native';
describe('UserSignUp1', () => {
    
    it('renders correctly', () => {
        const mockedParams = {
            route: { params: { currentBid: 'whatever-id', data:'user' } },
            navigation: {navigate:jest.fn()}
          };
        const tree = renderer.create(<UserSignUp1 {...mockedParams}/>).toJSON();
        expect(tree.type).toBe("View");
      
        const component = render(<UserSignUp1  {...mockedParams} />);
        const nextPress = component.getByTestId('button');
        fireEvent.press(nextPress);
        expect(nextPress).toBeTruthy();
    });

  
});
