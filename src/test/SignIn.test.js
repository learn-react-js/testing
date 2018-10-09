import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignIn from '../components/SignIn'
configure({ adapter: new Adapter() });

describe('<SignIn> component ', () => {
  const wrapper = shallow(<SignIn />);
  it('have form tag', () => {
    expect(wrapper).toHaveLength(1);
  });
});