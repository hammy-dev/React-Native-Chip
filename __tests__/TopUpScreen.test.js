import React from 'react';
import renderer from 'react-test-renderer';
import TopUp from '../src/screens/TopUp/index';
import {  render, fireEvent } from '@testing-library/react-native';
import { getAllBank } from '../src/services/Cashout';

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

describe('TopUp', () => {
    it('renders correctly', () => {
      const mockedParams = {
        navigation: {navigate:jest.fn()}
      };
        const tree = renderer.create( <TopUp {...mockedParams} />).toJSON();
        expect(tree.type).toBe( 'View')
        const component = render( <TopUp {...mockedParams} />);
        const visibleCard = component.getByTestId('visibleCard');
        fireEvent.press(visibleCard);
        
       
        // const setVisible = component.getByTestId('setVisible');
        // fireEvent.press(setVisible);
        
        
        const button = component.getByTestId('button');
        fireEvent.press(button);

        // const toggle = component.getByTestId('toggle');
        // fireEvent.press(toggle);

        // const decline = component.getByTestId('decline');
        // fireEvent.press(decline);
        const dropDown = component.getByTestId('dropDown');
          fireEvent.changeText(dropDown,{ label: "FirstCaribbeanBank", value: "1", url: "https:\/\/onlinebanking.firstcaribbeanbank.com\/" });
        jest.spyOn(React, 'useEffect').mockImplementation((f)=>f(
        ));
          
        const responseData = {"statuscode":"200","response":"true","data":[{"id":"1","name":"FirstCaribbeanBank","url":"https:\/\/onlinebanking.firstcaribbeanbank.com\/"},{"id":"2","name":"GIROBank","url":"https:\/\/personal.gironet.com\/DIBS_GIRO_BANK\/pages\/loginP.jsp"},{"id":"3","name":"Maduro & Curiel`sBank N.V. ","url":"https:\/\/online.mcb-bank.com\/#\/login"},{"id":"4","name":"OrcoBank","url":"https:\/\/online.orcobank.com\/templates\/logon\/logon.cfm"},{"id":"5","name":"RBC Bank","url":"https:\/\/caribbean.rbcroyalbank.com\/#\/login"},{"id":"6","name":"VidaNova Bank","url":"https:\/\/www.vidanova-ebanking.com\/#\/login"},{"id":"7","name":"Banco di Caribe N.V.","url":"https:\/\/bancodicaribeonline.com\/"}]};
  
  
        const mockFetch = Promise.resolve({ json: () => Promise.resolve(responseData) });
        global.fetch = jest.fn().mockImplementation(() => mockFetch);
        return getAllBank().then( (data) => {
          expect(responseData).toEqual(data);
        
        });

      

      
    });
    
})