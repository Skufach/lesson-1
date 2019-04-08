import React from 'react'
import { theme } from '@ui/theme'
import PropTypes from 'prop-types'

export const Checkbox = ({ disabled, checked }) => (
  <svg width={20} height={20} fill="none">
    {checked ? (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2 10l3.5 3.5 8.833-8.833L17.5 5.833l-10 10-4.667-4.666L4 10z"
        stroke="none"
        fill={disabled ? theme.pallete.silver : theme.pallete.radicalRed}
      />
    ) : (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2 10l3.5 3.5 8.833-8.833L17.5 5.833l-10 10-4.667-4.666L4 10z"
        stroke={theme.pallete.silver}
        fill="none"
      />
    )}
  </svg>
)

Checkbox.propTypes = {
  disabled: PropTypes.bool,
}
