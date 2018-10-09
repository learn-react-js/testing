import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PasswordForget from '../components/PasswordForget'
configure({ adapter: new Adapter() });

describe('<PasswordForget> component ', () => {
  const wrapper = shallow(<PasswordForget />);
  it('have form tag', () => {
    expect(wrapper).toHaveLength(1);
  });
});