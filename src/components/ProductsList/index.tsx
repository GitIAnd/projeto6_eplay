import Game from '../../models/Game'
import Product from '../Product/Index'
import { Container, List } from './styles'

type Props = {
  games: Game[]
}

const ProductsList = ({ games }: Props) => (
  <Container>
    <div className="container">
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            title={game.title}
            system={game.system}
            description={game.description}
            infos={game.infos}
            image={game.image}
          ></Product>
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
