import React from 'react'
import { storiesOf } from '@storybook/react'
import { RequestStatus } from './RequestStatus'
import { select, text } from '@storybook/addon-knobs'

storiesOf('ui/molecules', module).add('RequestStatus', () => (
  <RequestStatus
    status={select(
      'Статус',
      {
        errors: 'errors',
        success: 'success',
        none: null,
      },
      null,
    )}
    value={text('Значение', 'Отправка')}
  />
))
