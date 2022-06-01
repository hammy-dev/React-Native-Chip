import React, { useEffect } from 'react';
import renderer from 'react-test-renderer';
import UserSignUp2 from '../src/screens/SignUp/UserSignUp2/index';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {  render, fireEvent, waitFor } from '@testing-library/react-native';

configure({ adapter: new Adapter() });
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
const mockedParams = {
  route: { params: { currentBid: 'whatever-id' } },
  navigation: {navigate:jest.fn()}
};

describe('UserSignUp2', () => {
    it('renders correctly',() => {
        const tree = renderer.create(<UserSignUp2 {...mockedParams} />).toJSON();
            expect(tree.type).toBe("View");
            
    })
    });


    describe('signuo validation', () => {
      beforeEach(jest.useFakeTimers);
afterEach(jest.useRealTimers);

      it('test country value',async() => {
     
      //  act(async() => {
        const component= render(<UserSignUp2 {...mockedParams} />);
        const nextPress = component.getByTestId('button');
        fireEvent.press(nextPress);
      
        expect(nextPress).toBeTruthy();
  
         const country = await waitFor(() =>component.queryByTestId('country'));
         fireEvent.changeText(country.children[1], "3334321222");
    //  });
    })
  
      it('test password field without value', async() => {
           // act(async() => {
            const component= render(<UserSignUp2 {...mockedParams} />);
             const country = await waitFor(() =>component.queryByTestId('country'));
             
             fireEvent.changeText(country.children[1], "3334321222");
             const password = await waitFor(() =>component.queryByTestId('password'));
             
             fireEvent.changeText(password.children[1], "abc");
            const nextPress = component.getByTestId('button');
            fireEvent.press(nextPress);
            expect(nextPress).toBeTruthy();
          });

          it('test email field without value', async() => {
            // act(async() => {
             const component= render(<UserSignUp2 {...mockedParams} />);
              const country = await waitFor(() =>component.queryByTestId('country'));
              
              fireEvent.changeText(country.children[1], "3334321222");
              const password = await waitFor(() =>component.queryByTestId('password'));
              
              fireEvent.changeText(password.children[1], "abc");
              const email = await waitFor(() =>component.queryByTestId('email'));
              
              fireEvent.changeText(email, "abc@abc.com");
             const checkbox = component.queryByTestId('checkbox');
             fireEvent.press(checkbox);
             expect(checkbox).toBeTruthy();

             const viewTerm = component.queryByTestId('viewTerm');
             fireEvent.press(viewTerm);
             expect(viewTerm).toBeTruthy();

             const hideTerm = component.queryByTestId('hideTerm');
             fireEvent.press(hideTerm);
             expect(hideTerm).toBeTruthy();
             const nextPress = component.getByTestId('button');
             fireEvent.press(nextPress);
             expect(nextPress).toBeTruthy();
           });
   // })
    })