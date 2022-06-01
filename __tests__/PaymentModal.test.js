import React, { useEffect } from 'react';
import renderer from 'react-test-renderer';
import ChipPaymentModal from '../src/components/paymentModal/index';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('payment Modal', () => {
    it('renders correctly', () => {
     
        const tree = renderer.create(<ChipPaymentModal  />).toJSON();
            expect(tree.type).toBe("Modal");
    })
    });