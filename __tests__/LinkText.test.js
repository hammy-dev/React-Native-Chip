import React from 'react';
import renderer from 'react-test-renderer';
import LinkText from '../src/components/LinkText/index';

describe('BaseButton', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<LinkText />).toJSON();
    expect(tree.children.length).toBe(1);
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
  });