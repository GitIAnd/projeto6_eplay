import ProductsList from '../../components/ProductsList'
import Banner from '../../components/banner'

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
    infos: ['Sobrevivência'],
    image: palworld
  },
  {
    id: 2,
    title: 'Rocket League',
    system: 'Windows',
    description:
      'Rocket League é um jogo eletrônico de futebol em veículos desenvolvido e publicado pela Psyonix.',
    infos: ['Futebol'],
    image: rocketleague
  },
  {
    id: 3,
    title: 'Need for Speed: Unbound',
    system: 'Windows',
    description:
      'Need for Speed Unbound é um jogo eletrônico de 2022 de corrida desenvolvido pela Criterion Games e Codemasters.',
    infos: ['Corrida'],
    image: unbound
  },
  {
    id: 4,
    title: 'Horizon Zero Down',
    system: 'Windows',
    description:
      'Horizon Zero Dawn é um jogo eletrônico de RPG de ação pós-apocalíptico em um mundo aberto.',
    infos: ['RPG'],
    image: zerodown
  },
  {
    id: 5,
    title: 'Need for Speed: Payback',
    system: 'Windows',
    description:
      'Need For Speed: Payback é um jogo de mundo aberto de corrida desenvolvido pela Ghost Games e publicado pela Electronic Arts.',
    infos: ['Corrida'],
    image: payback
  },
  {
    id: 6,
    title: 'Red Dead Redemption 2',
    system: 'Windows',
    description:
      'Red Dead Redemption 2 é um jogo eletrônico de ação-aventura desenvolvido e publicado pela Rockstar Games.',
    infos: ['Ação-aventura'],
    image: rd2
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} />
  </>
)

export default Home
