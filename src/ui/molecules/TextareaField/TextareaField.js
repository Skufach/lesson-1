import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { HBox, VBox } from '@ui/atoms'
import { FormLabel } from '@ui/molecules'
import { styled, theme } from '@ui/theme'

const Container = styled.div`
  height: 101px;
  display: flex;
  flex-direction: column;
`

const TextFieldContainer = styled.div`
  box-sizing: border-box;
  padding-left: ${({ theme }) => theme.paddings.main};
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.pallete.darkWhite};
  height: 100px;
  border: 1px
    ${({ theme, focused }) =>
      focused ? theme.pallete.lola : theme.pallete.darkWhite}
    solid;
`

const StyledInput = styled.textarea`
  border: none;
  background-color: transparent;
  height: 80px;
  flex: 1;
  line-height: 18px;
  font-family: Montserrat;
  // box-sizing: border-box;
  font-size: 16px;
  outline: none;
  padding-top: ${({ theme }) => theme.paddings.half}px;
  padding-bottom: ${({ theme }) => theme.paddings.half}px;
  color: ${({ theme, disabled }) =>
    disabled ? theme.pallete.lightGray : theme.pallete.nero};
  ::placeholder {
    color: ${({ theme }) => theme.pallete.lightGray};
    line-height: 18px;
  }
`

export const TextareaField = ({
  disabled,
  placeholder,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
}) => {
  const [focused, setFocused] = useState(false)
  const handleFocus = e => {
    if (onFocus) {
      onFocus(e)
    }
    setFocused(true)
  }
  const handleBlur = e => {
    if (onBlur) {
      onBlur(e)
    }
    setFocused(false)
  }
  return (
    <Container>
      <FormLabel>{label}</FormLabel>
      <HBox height={theme.paddings.half} />
      <TextFieldContainer focused={focused}>
        <VBox />
        <StyledInput
          placeholder={placeholder ? placeholder : ''}
          disabled={disabled}
          value={value}
          onChange={e => onChange(e.currentTarget.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <VBox />
      </TextFieldContainer>
      <HBox height={theme.paddings.half} />
    </Container>
  )
}

TextareaField.propTypes = {
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,

  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}
