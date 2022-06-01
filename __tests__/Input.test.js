import React from 'react';
import renderer from 'react-test-renderer';
import SimpleInput from '../src/components/Input/Input';

describe('Input', () => {
    it('renders correctly', () => {
        const tree = renderer.create( <SimpleInput title={"test"} />).toJSON();
      expect(tree.type).toBe( 'View')
    });
   
  });
  