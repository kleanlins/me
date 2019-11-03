import React from "react";
import shallow from "enzyme/src/shallow";
import Header from "./Header";

describe('Header', () => {
    it('should render correctly', () => {
        const component = shallow(<Header />)
        expect(component.find('./Header').length).toEqual(1)
    })
})