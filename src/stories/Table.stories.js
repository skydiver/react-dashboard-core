import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color, array, number } from '@storybook/addon-knobs';

import shared from './shared';
import { Table } from '../dashboard/widgets';

const sampleHeaders = ['Header #1', 'Header #2', 'Header #3', 'Header #4'];

const sampleFields = ['field1', 'field2', 'field3', 'field4'];

const sampleData = [
  { field1: 'Sample Row #1', field2: 10, field3: 10 * 2, field4: 10 * 3 },
  { field1: 'Sample Row #2', field2: 20, field3: 20 * 2, field4: 20 * 3 },
  { field1: 'Sample Row #3', field2: 30, field3: 30 * 2, field4: 30 * 3 },
  { field1: 'Sample Row #4', field2: 40, field3: 40 * 2, field4: 40 * 3 },
  { field1: 'Sample Row #5', field2: 50, field3: 50 * 2, field4: 50 * 3 },
];

storiesOf('Table', module)
  .addDecorator(story => shared.decoratorDashboard(story))
  .addDecorator(withKnobs)

  .add('default', () =>
    <Table
      widgetSize={number('Widget Size', 10, shared.widgetSizeKnobOptions)}
      headers={array('Headers', sampleHeaders)}
      fields={sampleFields}
      rows={sampleData}
    />
  )

  .add('formatted', () =>
    <Table
      widgetSize={number('Widget Size', 10, shared.widgetSizeKnobOptions)}
      label={text('Label', 'Table widget formatted')}
      backgroundColor={color('Background Color', '#311E1E')}
      textColor={color('Text Color', '#FFF')}
      headers={array('Headers', sampleHeaders)}
      fields={sampleFields}
      rows={sampleData}
    />
  )

  .add('empty', () =>
    <Table
      widgetSize={number('Widget Size', 6, shared.widgetSizeKnobOptions)}
      label={text('Label', 'Table widget without records')}
      backgroundColor={color('Background Color', '#365455')}
      textColor={color('Text Color', '#FFF')}
      headers={sampleHeaders}
      fields={sampleFields}
    />
  );