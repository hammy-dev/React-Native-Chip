import React from 'react';
import renderer from 'react-test-renderer';
import MarchantInfo from '../src/screens/MerchantBusinessInfo/index';

describe('MyQr', () => {
    it('renders correctly', () => {
        
        const tree = renderer.create( <MarchantInfo />).toJSON();
      expect(tree.type).toBe( 'View')
    });
   
  });