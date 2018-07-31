import * as React from 'react'
import { shallow } from 'enzyme'
import  SecondPage from './index'

describe("SecondPage", () => {
    const component = shallow(<SecondPage/>);
    
    it('should match a snapshot', () => {
        expect(component).toMatchSnapshot();
    });

})