import ProductsList from '../../components/ProductsList'
import Banner, { BannerPerfil } from '../../components/banner'

import palworld from '../../assets/images/Palworld.png'
import payback from '../../assets/images/payback.jpg'
import rd2 from '../../assets/images/rd2.jpg'
import rocketleague from '../../assets/images/rocketleague.jpg'
import unbound from '../../assets/images/unbound.jpg'
import zerodown from '../../assets/images/zerodown.jpg'
import Game from '../../models/Game'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Palworld',
    system: 'Windows',
    description:
      'Palworld é um jogo de sobrevivência de ação e aventura do desenvolvedor japonês Pocket Pair.',
    infos: ['R$ 80'],
    image: palworld
  },
  {
    id: 2,
    title: 'Palworld',
    system: 'Xbox',
    description:
      'Palworld é um jogo de sobrevivência de ação e aventura do desenvolvedor japonês Pocket Pair.',
    infos: ['Gratuito'],
    image: palworld
  },
  {
    id: 3,
    title: 'Palworld',
    system: 'PS5  ',
    description:
      'Palworld é um jogo de sobrevivência de ação e aventura do desenvolvedor japonês Pocket Pair.',
    infos: ['R$ 130'],
    image: palworld
  },
  {
    id: 4,
    title: 'Palworld',
    system: 'PS5  ',
    description:
      'Palworld é um jogo de sobrevivência de ação e aventura do desenvolvedor japonês Pocket Pair.',
    infos: ['R$ 130'],
    image: palworld
  }
]

const Perfil = () => (
  <>
    <BannerPerfil />
    <ProductsList games={promocoes} />
  </>
)

export default Perfil
