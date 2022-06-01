import React from 'react';
import renderer from 'react-test-renderer';
import Help from '../src/screens/DrawerScreens/Help/index';
import {  render, fireEvent } from '@testing-library/react-native';
import PrivacyPolicy from '../src/screens/DrawerScreens/PrivacyPolicy/index';
import TermsConditions from '../src/screens/DrawerScreens/Terms&Conditions/index';
import ContactUs from '../src/screens/DrawerScreens/ContactUs/index';
import FAQs from '../src/screens/DrawerScreens/FAQs/index';

describe('Help', () => {
    it('renders correctly', () => {
        const mockedParams = {
          navigation: {navigate:jest.fn()}
        };
        const tree = renderer.create( <Help {...mockedParams} />).toJSON();
        expect(tree.type).toBe( 'View')
        const component= render( <Help   {...mockedParams} />);
        const nextPress = component.getByTestId('contactUs');
        fireEvent.press(nextPress);
        expect(nextPress).toBeTruthy();

    });

    it('Privacy renders correctly', () => {
        const tree = renderer.create( <PrivacyPolicy  />).toJSON();
        expect(tree.type).toBe( 'View')
    });

    it('Terms renders correctly', () => {
        const tree = renderer.create( <TermsConditions  />).toJSON();
        expect(tree.type).toBe( 'View')
    });

    it('ContactUs renders correctly', () => {
        const tree = renderer.create( <ContactUs  />).toJSON();
        expect(tree.type).toBe( 'View')
    });

    it('FAQS renders correctly', () => {
        const tree = renderer.create( <FAQs  />).toJSON();
        expect(tree.type).toBe( 'View')
    });
  });