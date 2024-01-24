import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 40px 0;
`

export const Logo = styled.div`
  padding-bottom: 32px;
  text-align: center;

  img {
    height: 57px;
    padding: 4px;
  }
`

export const RedesSociais = styled.div`
  padding-bottom: 80px;
  text-align: center;

  img {
    height: 35px;
    padding: 4px;
  }
`

export const Direitos = styled.div`
  text-align: center;
  font-size: 10px;
`
