import React from 'react';
import renderer from 'react-test-renderer';
import PendingRequest from '../src/screens/DrawerScreens/PendingRequest/index';


jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
describe('PendingRequest', () => {
    it('renders correctly', () => {
        const tree = renderer.create( <PendingRequest  />).toJSON();
      expect(tree.type).toBe( 'View')
    });
   
  });
  