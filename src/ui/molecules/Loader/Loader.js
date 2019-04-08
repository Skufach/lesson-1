import React from 'react'
import PropTypes from 'prop-types'

import { IconLoader } from '@ui/atoms'
import { styled, keyframes } from '@ui/theme/styled'

const Container = styled.div`
  height: 88px;
  display: flex;
  flex-direction: column;
`

export const Loader = ({ disabled, loading }) => (
  <Container>
    <IconLoader disabled={disabled} loading={loading} />
  </Container>
)

Loader.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
}
