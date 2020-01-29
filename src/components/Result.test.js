import React from 'react';
import { PureResult as Result } from './Result';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const { shallow } = Enzyme;

it('Should render the Result component with message about current turn', () => {
  const wrapper = shallow(<Result turn={'Banking'} draw={false} />);  
  expect(wrapper.getElement().props.children).toEqual(<p>It's BANKING's turn.</p>);
});

it('Should render the Result component with message about winning symbol', () => {
  const wrapper = shallow(<Result won={'Crypto'} draw={false} turn={'Crypto'} />);
  expect(wrapper.getElement().props.children).toEqual(<p>Yay! CRYPTO won!</p>);
});

it('Should render the Result component with message about the draw', () => {
  const wrapper = shallow(<Result draw={true} turn={'Crypto'} />);
  expect(wrapper.getElement().props.children).toEqual(<p>We have a draw!</p>);
});
