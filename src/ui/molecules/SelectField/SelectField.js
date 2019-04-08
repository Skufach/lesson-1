import React from 'react'
import PropTypes from 'prop-types'

import { HBox, VBox, IconDown } from '@ui/atoms'
import { FormLabel, FormAdornment } from '@ui/molecules'
import { styled } from '@ui/theme'

const Container = styled.div`
  height: 88px;
  display: flex;
  flex-direction: column;
`

const SelectFieldContainer = styled.div`
  box-sizing: border-box;
  padding-left: ${({ theme }) => theme.paddings.main};
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.pallete.darkWhite};
  height: 40px;
  min-height: 40px;
  border: 1px
    ${({ error, theme, focused }) =>
      error
        ? theme.pallete.errorColor
        : focused
        ? theme.pallete.lola
        : theme.pallete.darkWhite}
    solid;
`

const SelectStyledInput = styled.div`
  border: none;
  display: flex;
  align-items: center;
  background-color: transparent;
  height: 40px;
  flex: 1;
  line-height: 18px;
  font-family: Montserrat;
  font-size: 16px;
  outline: none;
  color: ${({ theme, disabled }) =>
    disabled ? theme.pallete.lightGray : theme.pallete.nero};
  ::placeholder {
    color: ${({ theme }) => theme.pallete.lightGray};
    line-height: 44px;
  }
`

export const SelectField = ({ label, value, disabled }) => {
  return (
    <Container>
      <FormLabel>{label}</FormLabel>
      <HBox />
      <SelectFieldContainer>
        <VBox />
        <SelectStyledInput disabled={disabled}>
          {value ? value : ''}
        </SelectStyledInput>
        <FormAdornment>
          <IconDown />
        </FormAdornment>
      </SelectFieldContainer>
    </Container>
  )
}

SelectField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
}
