import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from '../src/components/dropdownhelp/index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('Dropdownhelp', () => {
    it('renders correctly', async () => {
        const tree = renderer.create(<Dropdown />).toJSON();
            expect(tree.type).toBe("View");
    });

    // it('dropdown chnage event', async () => {
    //     let wrapper = shallow(<Dropdown/>);
    //     const setState = jest.fn();
    //     const useStateSpy = jest.spyOn(React, 'useState');

    //     useStateSpy.mockImplementation((init) => [init, setState]);
    //     const button = wrapper.find("picker")
    //    // button.simulate('change')
    //    wrapper.simulate('change')
    //     expect(setState).toHaveBeenCalledWith(0);
    // });
});