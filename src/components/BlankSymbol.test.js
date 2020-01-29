import React from 'react';
import BlankSymbol from './BlankSymbol';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const { shallow } = Enzyme;

it('Should call a passed addSymbol callback when it is clicked', () => {
  const addSymbol = jest.fn();
  const wrapper = shallow(<BlankSymbol addSymbol={addSymbol} />);
  wrapper.simulate('click');
  expect(addSymbol.mock.calls.length).toBe(1);
});
