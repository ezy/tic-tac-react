import React from 'react';
import App from './App';
import Result from './Result';
import Board from './Board';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const { shallow } = Enzyme;

it('Should render an App component with Result and Board components', () => {
  const wrapper = shallow(<App />).dive();
  expect(wrapper.find(Result).length).toBe(1);
  expect(wrapper.find(Board).length).toBe(1);
});
