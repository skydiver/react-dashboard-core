import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color, number } from '@storybook/addon-knobs';

import shared from './shared';
import { MultiBoxes } from '../dashboard/widgets';

const sampleData = [
  { label: 'Indicator #1', value: 10 },
  { label: 'Indicator #2', value: 20 },
  { label: 'Indicator #3', value: 30 },
  { label: 'Indicator #4', value: 40 },
  { label: 'Indicator #5', value: 50 },
];

storiesOf('MultiBoxes', module)
  .addDecorator(story => shared.decoratorDashboard(story))
  .addDecorator(withKnobs)

  .add('default', () =>
    <MultiBoxes
      widgetSize={number('Widget Size', 10, shared.widgetSizeKnobOptions)}
      label={text('Label', 'Multiple horizontal boxes widget')}
      data={sampleData}
    />,
  shared.options)

  .add('formatted', () =>
    <MultiBoxes
      widgetSize={number('Widget Size', 10, shared.widgetSizeKnobOptions)}
      label={text('Label', 'Multiple horizontal boxes widget formatted')}
      backgroundColor={color('Background Color', '#801515')}
      textColor={color('Text Color', '#FFF')}
      boxColor={color('Box Color', 'orange')}
      boxBorderColor={color('Box Border Color', 'white')}
      data={sampleData}
    />,
  shared.options);