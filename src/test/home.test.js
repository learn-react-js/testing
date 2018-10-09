import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../components/Home'
configure({ adapter: new Adapter() });

describe('<Home> component ', () => {
  const helloSectionWrapper = shallow(<Home />);
  it('renders correctly', () => {
    expect(helloSectionWrapper).toHaveLength(1);
  });
});