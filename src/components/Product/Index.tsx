import Button from '../Button/Index'
import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos } from './styles'

type Props = {
  title: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({ title, system, description, infos, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{system}</Tag>
    <Descricao>{description}</Descricao>
    <Button
      type="link"
      to="/Perfil"
      title="Clique aqui para aproveitar essa oferta"
    >
      Saiba mais
    </Button>
  </Card>
)

export default Product
