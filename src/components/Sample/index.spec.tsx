import * as React from 'react'
import { shallow } from 'enzyme'
import  Sample from './index'

describe("SecondPage", () => {
    const component = shallow(<Sample/>);

    it('should match a snapshot', () => {
        expect(component).toMatchSnapshot();
    });


  it('should initialize state', () => {
    expect(component.state()).toEqual({ input: "" });
  });

})