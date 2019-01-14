import { configure, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
addDecorator(withNotes);

const req = require.context('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);