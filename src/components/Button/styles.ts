import { styled } from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: 1px solid
    ${(Props) => (Props.variant === 'primary' ? colors.green : colors.white)};
  color: ${colors.white};
  background-color: ${(Props) =>
    Props.variant === 'primary' ? colors.green : 'transparent'};
  font-size: 16px;
  fonte-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  border: 1px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  font-size: 16px;
  fonte-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
