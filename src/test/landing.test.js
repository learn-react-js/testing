import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Landing from '../components/Landing'
configure({ adapter: new Adapter() });

describe('<Landing> component ', () => {
  const helloSectionWrapper = shallow(<Landing />);
  it('renders correctly', () => {
    expect(helloSectionWrapper).toHaveLength(1);
  });
});