import React from 'react'
import TransactionData from '../api/getTransaction'
import { shallow, mount } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
//using beforeach to test the component
describe('TransactionData', () => {
    beforeEach(() => {
        console.error = () => {};
        jest.clearAllMocks();

      });
    it('should render correctly', () => {
        const wrapper = mount(<TransactionData />);
        expect(wrapper).toMatchSnapshot();
    });
});




