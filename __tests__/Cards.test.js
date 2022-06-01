import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../src/components/Cards/index';

describe('Card', () => {
    it('renders correctly', () => {
      
        const tree = renderer.create(<Card title="Add Money" uri={require('../src/assets/homeicon/ic_wallet.png')}
            width={55} height={50} onPress={() => {  }} />).toJSON();
            expect(tree.type).toBe("View");
    });
});