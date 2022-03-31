import React from 'react'
import { shallow, mount } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomeScreen from '../app/view/screen/HomeScreen'

configure({ adapter: new Adapter() });


describe('<TransactionetailScreen/>',()=>{
  const createTestProps = (props) => ({
    navigation: {
      navigate: jest.fn(),
  },
});
props = createTestProps({});

    console.error = () => {};
    console.warn= () => {};
    getDataById=jest.fn(id=>{
        data={
            'id':id
        }
        return data
    })
    wrapper=mount(<HomeScreen {...props}/>)
    // console.log(wrapper.debug())
    it('Checking on getDataId',()=>{
       const mockData=getDataById('T100')
       expect(mockData.id).toBe('T100')
    })
    it('should simulate navigation to notification screen', () => {
      const wrapper = shallow(<HomeScreen {...props} />) 
      const spy = jest.spyOn(wrapper.instance(), "_navigateToNofication");
      wrapper.instance().forceUpdate();
      wrapper.find("Text").last().simulate("press", spy);
      expect(spy).toBeCalled();
    });
})

