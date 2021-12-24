export default class Chunk {
  nivel
  id
  categoria

  constructor(nivel, id, categoria) {
    this.id = id
    this.nivel = nivel
    this.categoria = categoria
  }

  get name() {
    return this.nivel + '_' + this.id + '_' + this.categoria
  }

  toString() {
    return this.name
  }
}
