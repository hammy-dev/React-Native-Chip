import React from 'react';
import renderer from 'react-test-renderer';
import CompletePayment from '../src/screens/DrawerScreens/CompletePayment/index';

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

const mockedParams = {
    navigation:{navigate:jest.fn()}

  };
describe('CompletePayment', () => {
    it('renders correctly', () => {
        const tree = renderer.create( <CompletePayment {...mockedParams} />).toJSON();
      expect(tree.type).toBe( 'View')
    });
   
  });
  