import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignUp from '../components/SignUp'
configure({ adapter: new Adapter() });

describe('<SignUp> component ', () => {
  const wrapper = shallow(<SignUp />);
  it('have form tag', () => {
    expect(wrapper).toHaveLength(1);
  });
});