import {
  Titulo,
  Logo,
  Container,
  PrimeiroContainer,
  LogoPerfil,
  Imagem,
  ContainerPerfil
} from './styles'

import BannerImg from '../../assets/images/banner.jpg'
import BannerPalworld from '../../assets/images/BannerPalworld.png'
import logo from '../../assets/images/logo.svg'

const Banner = () => (
  <Container>
    <Logo>
      <img src={logo} alt="EPLAY" />
    </Logo>
    <Titulo>
      <h1>Fique sempre ligado no mundo dos games</h1>
    </Titulo>
  </Container>
)

export const BannerPerfil = () => (
  <ContainerPerfil>
    <PrimeiroContainer>
      <h1>Plataformas</h1>
      <LogoPerfil>
        <img src={logo} alt="EPLAY" />
      </LogoPerfil>
      <h1>0 produto(s) no carrinho</h1>
    </PrimeiroContainer>
    <Imagem style={{ backgroundImage: `url(${BannerPalworld})` }}>
      <div className="container">
        <h1>Palworld</h1>
      </div>
    </Imagem>
  </ContainerPerfil>
)

export default Banner
