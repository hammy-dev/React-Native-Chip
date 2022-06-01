import React from 'react';
import renderer from 'react-test-renderer';
import RequestComponent from '../src/components/FriendRequestComponent';
import {  render, fireEvent } from '@testing-library/react-native';
const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => (
  { useNavigation: () => ({ navigate: mockedNavigate }) }));


describe('RequestComponent', () => {
    it('renders correctly', () => {
        const mockedParams = {
            userId:'2',
            name:'hamza',
            phone:'+92311223344',
            uri:''

          };
        const tree = renderer.create( <RequestComponent  {...mockedParams}/>).toJSON();
        expect(tree.type).toBe( 'View')
        const component = render( <RequestComponent {...mockedParams}  />);
        const click = component.getByTestId('click');
        fireEvent.press(click);

        // const setVisible = component.getByTestId('setVisible');
        // fireEvent.press(setVisible);
        

      
    });
    
})