import React from 'react';
import renderer from 'react-test-renderer';
import CreatePin from '../src/screens/Pin/CreatePin/index';
import {  render, fireEvent, waitFor, act } from '@testing-library/react-native';
import { addUserPin } from '../src/services/UserService';
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
const mockedParams = {
    route: { params: { currentBid: 'whatever-id',token:{token:'2222'}, data:{id:'1'} } },
    navigation: {navigate:jest.fn()}
};
describe('CreatePin', () => {
    it('renders correctly', () => {
        const tree = renderer.create( <CreatePin {...mockedParams} />).toJSON();
        expect(tree.type).toBe( 'View')
    });


    it('add correct pin',()=>{
        const component= render( <CreatePin {...mockedParams} />);
        const pad1 = component.queryByTestId('pinView');
        fireEvent.changeText(pad1.children[0],'1122');
        fireEvent(pad1.children[0], 'onValueChange', '1122')
        fireEvent.press(pad1.children[0]);
        expect(pad1.children[0]).toBeTruthy();

        fireEvent.changeText(pad1.children[0],'1122');
        fireEvent(pad1.children[0], 'onValueChange', '1122')
        fireEvent.press(pad1.children[0]);
        expect(pad1.children[0]).toBeTruthy();

      

    })

    it('add incorrect pin',()=>{
        const component= render( <CreatePin {...mockedParams} />);
        const pad1 = component.queryByTestId('pinView');
        fireEvent.changeText(pad1.children[0],'1122');
        fireEvent(pad1.children[0], 'onValueChange', '1122')
        fireEvent.press(pad1.children[0]);
        expect(pad1.children[0]).toBeTruthy();

        fireEvent.changeText(pad1.children[0],'1123');
        fireEvent(pad1.children[0], 'onValueChange', '1123')
        fireEvent.press(pad1.children[0]);
        expect(pad1.children[0]).toBeTruthy();
    })


    it('check success response',()=>{
        const component= render( <CreatePin {...mockedParams} />);
       

        const responseData = {"statuscode":"200","response":"true","message":"Pin  added"}
        const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
        global.fetch = jest.fn().mockImplementation(() => mockFetch);
       return addUserPin({id:'11',pin:'111',token:'11111111'}).then((data) => {
        const pad1 = component.queryByTestId('pinView');
        fireEvent.changeText(pad1.children[0],'1122');
        fireEvent(pad1.children[0], 'onValueChange', '1122')
        fireEvent.press(pad1.children[0]);
        expect(pad1.children[0]).toBeTruthy();

        fireEvent.changeText(pad1.children[0],'1122');
        fireEvent(pad1.children[0], 'onValueChange', '1122')
        fireEvent.press(pad1.children[0]);
        expect(pad1.children[0]).toBeTruthy();
         expect(data).toEqual(responseData);
       });

    })


    it('check error response',()=>{
        const component= render( <CreatePin {...mockedParams} />);
       

        const responseData = {"statuscode":"200","response":"false","message":"Pin  not added"}
        const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
        global.fetch = jest.fn().mockImplementation(() => mockFetch);
       return addUserPin({id:'11',pin:'111',token:'11111111'}).then((data) => {
        const pad1 = component.queryByTestId('pinView');
        fireEvent.changeText(pad1.children[0],'1122');
        fireEvent(pad1.children[0], 'onValueChange', '1122')
        fireEvent.press(pad1.children[0]);
        expect(pad1.children[0]).toBeTruthy();

        fireEvent.changeText(pad1.children[0],'1122');
        fireEvent(pad1.children[0], 'onValueChange', '1122')
        fireEvent.press(pad1.children[0]);
        expect(pad1.children[0]).toBeTruthy();
         expect(data).toEqual(responseData);
       });

    })
   
  });
  