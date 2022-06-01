import React, { useEffect } from 'react';
import renderer from 'react-test-renderer';
import MarchantSignUpOne from '../src/screens/marchantSignUpOne/index';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {  render, fireEvent, waitFor } from '@testing-library/react-native';
configure({ adapter: new Adapter() });
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

describe('marchantSignUpOne', () => {
    it('renders correctly', () => {
      const mockedParams = {
        route: { params: { currentBid: 'whatever-id' } },
        navigation: jest.fn()
      };
        jest.spyOn(React, 'useEffect').mockImplementation((f)=>f());
        const tree = renderer.create(< MarchantSignUpOne  {...mockedParams}  />).toJSON();
            expect(tree.type).toBe("View");
           
    })

    it('click button', async() => {
      const mockedParams = {
        route: { params: { currentBid: 'whatever-id' } },
        navigation: {
          navigate: jest.fn()
        }
      };
    
      const component= render(<MarchantSignUpOne {...mockedParams} />);
      
      const merchantTwo = component.getByTestId('merchantTwo');
      fireEvent.press(merchantTwo);
      expect(merchantTwo).toBeTruthy();


      const nextPress = component.getByTestId('button');
      fireEvent.press(nextPress);
      expect(nextPress).toBeTruthy();
      // const visibleEnable = component.getByTestId('visibleEnable');
      // fireEvent.press(visibleEnable);
      // expect(visibleEnable).toBeTruthy();

      const navigate = component.getByTestId('navigate');
      fireEvent.press(navigate);
      expect(navigate).toBeTruthy();

      

      
      
    })

    it('ccn empty value test', async() => {
      const mockedParams = {
        route: { params: { currentBid: 'whatever-id' } },
        navigation: {
          navigate: jest.fn()
        }
      };
    
      const component= render(<MarchantSignUpOne {...mockedParams} />);
      const merchantTwo = component.getByTestId('merchantTwo');
      fireEvent.press(merchantTwo);
      expect(merchantTwo).toBeTruthy();
      const name = await waitFor(() =>component.queryByTestId('name'));
      fireEvent.changeText(name, "3334321222");
      const nextPress = component.getByTestId('button');
      fireEvent.press(nextPress);
      expect(nextPress).toBeTruthy();
      
    })


    it('tax empty value test', async() => {
      const mockedParams = {
        route: { params: { currentBid: 'whatever-id' } },
        navigation: {
          navigate: jest.fn()
        }
      };
    
      const component= render(<MarchantSignUpOne {...mockedParams} />);
      const merchantTwo = component.getByTestId('merchantTwo');
      fireEvent.press(merchantTwo);
      expect(merchantTwo).toBeTruthy();
      const name = await waitFor(() =>component.queryByTestId('name'));
      fireEvent.changeText(name, "3334321222");
      const ccr = await waitFor(() =>component.queryByTestId('ccr'));
      fireEvent.changeText(ccr, "111");
      const nextPress = component.getByTestId('button');
      fireEvent.press(nextPress);
      expect(nextPress).toBeTruthy();
      
    })

    it('tax empty value for value', async() => {
      const mockedParams = {
        route: { params: { currentBid: 'whatever-id' } },
        navigation: {
          navigate: jest.fn()
        }
      };
    
      const component= render(<MarchantSignUpOne {...mockedParams} />);
      const merchantTwo = component.getByTestId('merchantTwo');
      fireEvent.press(merchantTwo);
      expect(merchantTwo).toBeTruthy();
      const name = await waitFor(() =>component.queryByTestId('name'));
      fireEvent.changeText(name, "3334321222");
      const ccr = await waitFor(() =>component.queryByTestId('ccr'));
      fireEvent.changeText(ccr, "111");
      const tax = await waitFor(() =>component.queryByTestId('tax'));
      fireEvent.changeText(tax, "111");
      const nextPress = component.getByTestId('button');
      fireEvent.press(nextPress);
      expect(nextPress).toBeTruthy();
      
    })

    });
   
