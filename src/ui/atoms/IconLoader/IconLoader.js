import React from 'react'
import PropTypes from 'prop-types'
import { theme } from '@ui/theme'
import { styled, keyframes } from '@ui/theme/styled'

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`
const RotateLoader = styled.svg`
  animation: ${rotate} 1.2s infinite linear;
`

export const IconLoader = ({ disabled, loading }) => (
  <RotateLoader width={18} height={18} fill="none" class="round-loader">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0h1a9 9 0 1 1-9 9V8h2v1a7 7 0 1 0 7-7H8V0z"
      stroke="none"
      fill={
        loading
          ? theme.pallete.radicalRed
          : disabled
          ? theme.pallete.silver
          : theme.pallete.gray2
      }
    />
  </RotateLoader>
)

IconLoader.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
}
