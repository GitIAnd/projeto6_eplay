import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  padding: 8px 16px;
`

export const ButtonLink = styled(Link)`
  color: ${cores.branca};
  font-size: 14px;
  background-color: ${cores.verde};
  padding: 4px 6px;
  text-decoration: none;
  border-radius: 6px;
`
