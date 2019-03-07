import { configure } from '@storybook/react';

import '../src/App.css';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
