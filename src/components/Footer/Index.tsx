import { Container, Direitos, Logo, RedesSociais } from './styles'

import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <Container>
    <div className="container">
      <Logo>
        <img src={logo} alt="EPLAY" />
      </Logo>
      <RedesSociais>
        <img src={facebook} alt="EPLAY" />
        <img src={instagram} alt="EPLAY" />
        <img src={twitter} alt="EPLAY" />
      </RedesSociais>
      <Direitos>
        <p>
          A eplay é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </Direitos>
    </div>
  </Container>
)

export default Footer
