jest.dontMock('../routes');

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

import routes from '../routes';

describe('<App />', () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      { routes }
    </MemoryRouter>
  );

  // it('renders a static text', () => {
  //   expect(wrapper.find(<p>React thunk home</p>)).toHaveLength(1)
  // });
});
