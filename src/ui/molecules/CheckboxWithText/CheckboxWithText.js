import React from 'react'
import PropTypes from 'prop-types'

import { VBox, Checkbox } from '@ui/atoms'
import { styled } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'

const Container = styled.div`
  height: 88px;
  display: flex;
  flex-direction: row;
`

export const CheckboxWithText = ({ disabled, text,checked }) => {
  return (
    <Container>
      <Checkbox disabled={disabled} checked={checked} />
      <VBox />
      <Body2>{text ? text : ''}</Body2>
    </Container>
  )
}

CheckboxWithText.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  text: PropTypes.text,
}
