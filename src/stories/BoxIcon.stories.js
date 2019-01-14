import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color, array, number } from '@storybook/addon-knobs';

import shared from './shared';
import { BoxIcon } from '../dashboard/widgets';

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

storiesOf('BoxIcon', module)
  .addDecorator(story => shared.decoratorDashboard(story))
  .addDecorator(withKnobs)

  .add('default', () =>
    <BoxIcon
      widgetSize={number('Widget Size', 2, shared.widgetSizeKnobOptions)}
      icon={array('FA Icon', ['fas', 'rocket'])}
      label={text('Label', 'Box Widget with Icon')}
    />,
  shared.options)

  .add('formatted', () =>
    <BoxIcon
      widgetSize={number('Widget Size', 2, shared.widgetSizeKnobOptions)}
      backgroundColor={color('Background Color', '#F4A460')}
      textColor={color('Text Color', '#FFF')}
      icon={array('FA Icon', ['fas', 'car'])}
      iconColor={color('Icon Color', '#FFF')}
      label={text('Label', 'Box widget with icon formatted')}
      value={100}
    />,
  shared.options);