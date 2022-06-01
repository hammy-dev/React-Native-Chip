import React, { useEffect } from 'react';
import renderer from 'react-test-renderer';
import SignUp from '../src/screens/SignUp/index';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

describe('SignUp', () => {
    it('renders correctly', () => {
        jest.spyOn(React, 'useEffect').mockImplementation((f)=>f());
        const tree = renderer.create(<SignUp route={{params: 'some param'}} />).toJSON();
            expect(tree.type).toBe("View");
    })
    });
   
