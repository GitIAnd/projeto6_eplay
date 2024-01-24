import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  padding: 40px 0;
  background-color: ${cores.cinza};
`

export const Logo = styled.div`
  padding-bottom: 138px;
  text-align: center;

  img {
    height: 57px;
    padding: 4px;
  }
`

export const Titulo = styled.div`
  text-align: center;
  p {
    font-size: 36px;
    text-align: center;
  }
`

export const PrimeiroContainer = styled.div`
  padding: 40px 80px 0 80px;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 18px;
  }
`

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-size: cover;
  padding-top: 214px;

  h1 {
    font-size: 32px;
    -webkit-text-stroke: 2px black;
  }
`

export const LogoPerfil = styled.div`
  text-align: center;
  padding-bottom: 64px;
`

export const ContainerPerfil = styled.div`
  padding-top: 40px;
  background-color: ${cores.cinza};
`
