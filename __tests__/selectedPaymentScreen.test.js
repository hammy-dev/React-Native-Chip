import React from 'react';
import renderer from 'react-test-renderer';
import {  render, fireEvent } from '@testing-library/react-native';
import SelectedPayment from '../src/screens/DrawerScreens/selectedPaymentScreen/index';

describe('SelectedPayment', () => {
    it('renders correctly', () => {
        const mockedParams = {
            route: { params: { 
                currentBid: 'whatever-id',
                 item: {item:{
                    trans_id: '11',
                    created:'1010101010101010101'
                 }
                    },
                  } },
            
          };
        const tree = renderer.create( <SelectedPayment  {...mockedParams}/>).toJSON();
      expect(tree.type).toBe( 'View')
     
    });
  });