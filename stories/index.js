import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import DummyComponent from '../src/components/atoms/dummy-component';
import TestHook from '../src/components/atoms/test-hook';
import Tooltip from '../src/components/atoms/tooltip';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>);

storiesOf('Dummy component', module)
  .add('Default', () => <DummyComponent onClick={action('clicked')} />);

storiesOf('Draw', module)
  .add('Default', () => <TestHook />);

storiesOf('Tooltip', module)
  .add('Default', () => (
    <Tooltip
      id="default"
      text="Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet" 
    />
  ));
