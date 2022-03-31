import React from 'react'
import TransactionDetailScreen from "../app/view/screen/TransactionDetailScreen";
import axios from "axios";
import { shallow, mount } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock("axios")
configure({ adapter: new Adapter() });

let wrapper;


describe("when API call is successful", () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(initialState => [initialState, setState]);
  beforeEach(() => {
    jest.clearAllMocks();
  });
  //test getdatabyid with moock data
  it("getDataById with mock data", () => {
    const mockData = {
      "id": "T100",
      "notification_read": false
    };
    axios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: mockData
      })
    );
    const wrapper = shallow(<TransactionDetailScreen {...props} />);
    const instance = wrapper.instance();
    instance.getDataById("T100");
    expect(setState).toHaveBeenCalledWith(mockData);
  });
  describe('<TransactionetailScreen/>',()=>{
    let  props={
          route:{
              params:{
                  id: 'T100'
              }
          }
      }
      console.error = () => {};
      console.warn= () => {};
      wrapper=mount(<TransactionDetailScreen {...props}/>)
      const getDataById=jest.fn(id=>{
         const data={
              'id':id
          }
          return data
      })
      it('Checking on getDataId',()=>{
         const mockData=getDataById('T100')
         expect(mockData.id).toBe('T100')
      });
  })
});