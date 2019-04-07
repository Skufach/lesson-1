import React from 'react'
import { storiesOf } from '@storybook/react'
import { CheckboxWithText } from './CheckboxWithText'
import { boolean, text } from '@storybook/addon-knobs'

storiesOf('ui/molecules', module).add('CheckboxWithText', () => (
  <CheckboxWithText
    disabled={boolean('disabled', false)}
    text={text('Текст', 'Подтвердите условия')}
  />
))
