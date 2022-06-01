import React, { useEffect } from 'react';
import renderer from 'react-test-renderer';
import Loader from '../src/components/Loader/index';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

describe('Loader', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Loader  />).toJSON();
            expect(tree.type).toBe("View");
    })
    });
   
