import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignOut from '../components/SignOut'
configure({ adapter: new Adapter() });

describe('<SignOut> component ', () => {
  const wrapper = shallow(<SignOut />);
  it('have form tag', () => {
    expect(wrapper).toHaveLength(1);
  });
});