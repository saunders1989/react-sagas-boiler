import React from 'react';
import { shallow, mount } from 'enzyme';

import DummyComponent from '../../components/atoms/dummy-component';

/** @test {DummyComponent} */
describe('DummyComponent', () => {

  it('should be defined', () => {
    expect(DummyComponent).toBeDefined();
  });

  let wrapper;

  it('should render correctly', () => {
    wrapper = shallow(
      <DummyComponent />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with correct default props', () => {
    wrapper = mount(
      <DummyComponent />
    );

    expect(wrapper.props().onClick).not.toThrow();
 });
});
