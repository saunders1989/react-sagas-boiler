import React from 'react';
import { shallow } from 'enzyme';

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
});
