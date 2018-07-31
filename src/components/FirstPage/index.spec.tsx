import * as React from 'react'
import { shallow } from 'enzyme'
import  FirstPage from './index'

describe("SecondPage", () => {
    const component = shallow(<FirstPage input={{text: ""}} onClicked={() => {}}/>);

    it('should match a snapshot', () => {
        expect(component).toMatchSnapshot();
    });

})