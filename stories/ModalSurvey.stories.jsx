import React from 'react';
import ModalSurvey from '../src/components/ModalSurvey';
import {action} from '@storybook/addon-actions';
import {Wrapper} from './ui';



export default {
  title: 'ModalSurvey',
  component: ModalSurvey,

};

export const Basic = () => (
  <Wrapper>
    <div style={{maxHeight: "200px"}}>
      <ModalSurvey
        isOpen={true}
      />
    </div>
  </Wrapper>
);







