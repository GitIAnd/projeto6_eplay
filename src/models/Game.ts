class Game {
  title: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number

  constructor(
    id: number,
    title: string,
    system: string,
    description: string,
    infos: string[],
    image: string
  ) {
    this.id = id
    this.description = description
    this.system = system
    this.title = title
    this.infos = infos
    this.image = image
  }
}

export default Game
