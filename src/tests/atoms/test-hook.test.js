import React from 'react';
import { shallow, mount } from 'enzyme';

import TestHook from '../../components/atoms/test-hook';

/** @test {TestHook} */
describe('TestHook', () => {

  it('should be defined', () => {
    expect(TestHook).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(
      <TestHook />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when button is clicked', () => {
    const wrapper = mount(<TestHook />);
    const button = wrapper.find('button');
    button.simulate('click');

    expect(button.text()).toBe('close');
  });
});
