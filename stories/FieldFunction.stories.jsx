import React from 'react';
import FieldFunction from '../src/components/FieldFunction';
import {action} from '@storybook/addon-actions';
import {Wrapper} from './ui';

import {latest} from '@mapbox/mapbox-gl-style-spec'


export default {
  title: 'FieldFunction',
  component: FieldFunction,

};

export const Basic = () => {
  const value = {
    "property": "rank",
    "type": "categorical",
    "default": "#222",
    "stops": [
      [
        {"zoom": 6, "value": ""},
        ["#777"]
      ],
      [
        {"zoom": 10, "value": ""},
        ["#444"]
      ]
    ]
  };

  return <div style={{width: "360px"}}>
    <FieldFunction
      onChange={() => {}}
      value={value}
      errors={[]}
      fieldName={"Color"}
      fieldType={"color"}
      fieldSpec={latest['paint_fill']['fill-color']}
    />
  </div>
};

