import React from 'react';
import App from '../App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  console.log('ini lo', wrapper);
  expect(wrapper.contains(welcome)).toEqual(true);
});