import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageTemplate, HBox, Flex1, IconBack, Divider } from '@ui/atoms'
import { styled } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import {
  TextField,
  SelectField,
  TextareaField,
  CheckboxWithText,
  ButtonAccent,
  Loader,
} from '@ui/molecules'
import { action } from '@storybook/addon-actions'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

storiesOf('ui/pages', module).add('TransferForm', () => {
  return (
    <PageTemplate>
      <IconBack />
      <Flex1>
        <Wrapper>
          <HBox height={9} />
          <SelectField label="Страна 1" value="Россия"  />
          <HBox height={20} />
          <SelectField label="Страна 2" value="Америка"/>
          <Divider />
          <HBox height={20} />
          <TextField
            label="Российский рубль (RUB)"
            placeholder="Введите сумму"
            onChange={action('onChange')}
            value="2000"
            status="success"
            tip="Текст подсказки к полю"
          />
          <HBox height={20} />
          <TextField
            label="Фунт стерлингов (GBP)"
            placeholder="Введите сумму"
            onChange={action('onChange')}
            value="2000"
            status="success"
            tip="Текст подсказки к полю"
          />
          <HBox height={20} />
          <TextareaField
            placeholder="Введите текст"
            label="Комментарий"
            value="Какой-то текст от пользователя"
            onChange={action('onChange')}
          />
          <HBox height={20} />
          <CheckboxWithText
            text="Со всеми условиями согласен"
            checked="true"
          />
          <ButtonAccent onPress={action('press')}>Отправить</ButtonAccent>
        </Wrapper>
      </Flex1>
    </PageTemplate>
  )
})
