import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Account from '../components/Account'
configure({ adapter: new Adapter() });

describe('<Account> component ', () => {
  const wrapper = shallow(<Account />);
  it('have form tag', () => {
    expect(wrapper).toHaveLength(1);
  });
});