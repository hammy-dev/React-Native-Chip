import React from 'react';
import renderer from 'react-test-renderer';
import Pin from '../src/screens/Pin/index';
import {  render, fireEvent, waitFor, act } from '@testing-library/react-native';


const mockedParams = {
    navigation: {navigate:jest.fn(), goBack: jest.fn()}
  };

describe('Pin', () => {
    it('renders correctly', () => {
        jest.spyOn(React, 'useEffect').mockImplementation((f)=>f());
        const tree = renderer.create( <Pin {...mockedParams} />).toJSON();
        expect(tree.type).toBe( 'View')        
    });

    it('correct Pin', ()=>{
        const component= render( <Pin {...mockedParams} />);
        const pad1 = component.queryByTestId('pinView');
        fireEvent.changeText(pad1.children[0],'1122');
        fireEvent(pad1.children[0], 'onValueChange', '1122')
        fireEvent.press(pad1.children[0]);
        expect(pad1.children[0]).toBeTruthy();
    })

    it('Incorrect Pin', ()=>{
        const component= render( <Pin {...mockedParams} />);
        const pad1 = component.queryByTestId('pinView');
        fireEvent.changeText(pad1.children[0],'1122');
        fireEvent(pad1.children[0], 'onValueChange', '1123')
        fireEvent.press(pad1.children[0]);
        expect(pad1.children[0]).toBeTruthy();
    })
   
  });
  