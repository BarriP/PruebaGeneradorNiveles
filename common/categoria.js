export default class Categoria {
  id
  categoria
  limit
  usage

  constructor(id, categoria) {
    this.id = id
    this.categoria = categoria
    this.limit = 1
    this.usage = 0
  }

  get usable() {
    return this.usage < this.limit
  }

  toString() {
    return this.categoria
  }
}
