import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Body2 } from '@ui/atoms/Typography'
import { styled, theme } from '@ui/theme'

const ContainerReqStatus = styled.div`
  text-align: center;
  color: ${({ status, theme }) =>
    status == 'errors'
      ? theme.pallete.errorColor
      : status == 'success'
      ? theme.pallete.successColor
      : theme.pallete.lola};
`

export const RequestStatus = ({ status, value }) => {
  return value ? (
    <Body2>
      <ContainerReqStatus
        status={
          status === 'errors'
            ? 'errors'
            : status === 'success'
            ? 'success'
            : null
        }
      >
        {value}
      </ContainerReqStatus>
    </Body2>
  ) : null
}

RequestStatus.propTypes = {
  status: PropTypes.oneOf(['errors', 'success']),
  value: PropTypes.string,
}
