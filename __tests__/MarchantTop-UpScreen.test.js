import React from 'react';
import renderer from 'react-test-renderer';
import MarchantTop from '../src/screens/DrawerScreens/MarchantTop-Up/index';


jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

describe('MarchantTop', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<MarchantTop  />).toJSON();
            expect(tree.type).toBe("View");
    })
    });
   
