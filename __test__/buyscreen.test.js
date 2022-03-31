import React from 'react'
import BuyScreen from '../app/view/screen/BuyScreen'
import { shallow, mount } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<TransactionetailScreen/>',()=>{
   
    console.error = () => {};
    console.warn= () => {};
   
    wrapper=shallow(<BuyScreen />)
    it('Checking on getDataId',()=>{
       expect(wrapper).toMatchSnapshot();
    })

})
