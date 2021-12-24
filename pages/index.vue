<template>
  <main class="container-fluid mb-3">
    <b-jumbotron class="text-center" header="Randomizer" >
    </b-jumbotron>

    <!--
    -->
    <b-button variant="info" class="mb-3" @click="rellenarDatosBase">Rellenar Datos Iniciales</b-button>
    <b-card title="Random Numero de veces a salir">
      <b-row>
        <b-col cols="2">
          <b-input-group size="lg" prepend="1 Vez" append="%">
            <b-form-input v-model="probabilidades.c1" type="number" :number="true"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="2">
          <b-input-group size="lg" prepend="2 Veces" append="%">
            <b-form-input v-model="probabilidades.c2" type="number" :number="true"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="2">
          <b-input-group size="lg" prepend="3 Veces" append="%">
            <b-form-input v-model="probabilidades.c3" type="number" :number="true"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="2">
          <b-input-group size="lg" prepend="4 Veces" append="%">
            <b-form-input v-model="probabilidades.c4" type="number" :number="true"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="2">
          <b-input-group size="lg" prepend="5 Veces" append="%">
            <b-form-input v-model="probabilidades.c5" type="number" :number="true"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <b-alert class="mt-3" variant="danger" :show="(probabilidades.c1 + probabilidades.c2 + probabilidades.c3 + probabilidades.c4 + probabilidades.c5) != 100">La suma de ambos no es 100%</b-alert>
    </b-card>
    <b-card title="Random Ruptura de Categoria" class="mt-3">
      <b-row>
        <b-col cols="3">
          <b-input-group size="lg" prepend="Super Facil (XS)" append="%">
            <b-form-input v-model="probabilidades.rxs" type="number" :number="true"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="2">
          <b-input-group size="lg" prepend="Facil (S)" append="%">
            <b-form-input v-model="probabilidades.rs" type="number" :number="true"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="2">
          <b-input-group size="lg" prepend="Medio (M)" append="%">
            <b-form-input v-model="probabilidades.rm" type="number" :number="true"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="2">
          <b-input-group size="lg" prepend="Dificil (L)" append="%">
            <b-form-input v-model="probabilidades.rl" type="number" :number="true"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="3">
          <b-input-group size="lg" prepend="Super Dificil (XL)" append="%">
            <b-form-input v-model="probabilidades.rxl" type="number" :number="true"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
    </b-card>
    <b-card title="Opciones adicionales" class="mt-3">
      <b-row>
        <b-col>
          <strong>No implmenentadas, por defecto a TRUE todas</strong>
          <b-form-group label="Permitir empezar categorias aunque no haya algunas terminadas">
            <b-form-radio-group
              id="btn-radios-1"
              v-model="opciones.starvation"
              :options="combos.starvation"
              name="radios-btn-default"
              buttons
            ></b-form-radio-group>
          </b-form-group>
          <b-form-group label="No repetir mismo en el mismo nivel de dificultad">
            <b-form-radio-group
              id="btn-radios-1"
              v-model="opciones.starvation"
              :options="combos.starvation"
              name="radios-btn-default"
              buttons
            ></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
    </b-card>
    <b-card title="Categorias" class="mt-3">
      <b-card no-body>
        <b-tabs v-model="combos.activeCardIndex" card>
          <b-tab title="Random Categorias" active>
            <div>
            <b-row class="mb-3">
              <b-col cols="3">
                <b-input-group size="lg" prepend="Numero total de categorias" append="Nº">
                  <b-form-input v-model="chunks.categories" type="number" :number="true"></b-form-input>
                </b-input-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="3">
                <b-input-group size="lg" prepend="Super Facil (XS)" append="Nº">
                  <b-form-input v-model="chunks.xs" type="number" :number="true"></b-form-input>
                </b-input-group>
              </b-col>
              <b-col cols="2">
                <b-input-group size="lg" prepend="Facil (S)" append="Nº">
                  <b-form-input v-model="chunks.s" type="number" :number="true"></b-form-input>
                </b-input-group>
              </b-col>
              <b-col cols="2">
                <b-input-group size="lg" prepend="Medio (M)" append="Nº">
                  <b-form-input v-model="chunks.m" type="number" :number="true"></b-form-input>
                </b-input-group>
              </b-col>
              <b-col cols="2">
                <b-input-group size="lg" prepend="Dificil (L)" append="Nº">
                  <b-form-input v-model="chunks.l" type="number" :number="true"></b-form-input>
                </b-input-group>
              </b-col>
              <b-col cols="3">
                <b-input-group size="lg" prepend="Super Dificil (XL)" append="Nº">
                  <b-form-input v-model="chunks.xl" type="number" :number="true"></b-form-input>
                </b-input-group>
              </b-col>
            </b-row>
            </div>
          </b-tab>
          <b-tab title="Cargar Categorias desde texto">
            <!-- PONER CARGA DESDE TEXTO -->
          </b-tab>
        </b-tabs>
      </b-card>
    </b-card>
    <b-card title="Composicion del nivel" class="mt-3">
      <b-row>
        <b-col cols="3">
          <b-input-group size="lg" prepend="Super Facil (XS)" append="Chunks">
            <b-form-input v-model="nivel.xs" type="number" :number="true"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="2">
          <b-input-group size="lg" prepend="Facil (S)" append="Chunks">
            <b-form-input v-model="nivel.s" type="number" :number="true"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="2">
          <b-input-group size="lg" prepend="Medio (M)" append="Chunks">
            <b-form-input v-model="nivel.m" type="number" :number="true"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="2">
          <b-input-group size="lg" prepend="Dificil (L)" append="Chunks">
            <b-form-input v-model="nivel.l" type="number" :number="true"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="3">
          <b-input-group size="lg" prepend="Super Dificil (XL)" append="Chunks">
            <b-form-input v-model="nivel.xl" type="number" :number="true"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
    </b-card>

    <!--
    -->

    <br />

    <!--
    -->

    <b-button block variant="primary" @click="generar">GENERAR RUN</b-button>

    <!--
    -->

    <br />

    <!--
    -->

    <b-card v-if="combos.showResult" title="Resultado de la RUN" class="mt-3">
      <h3>Categorias totales ({{ engine.categories.length }})</h3>
      <div>
        <colored-tag v-for="c in engine.categories" :key="c" class="ml-3" :text="c"></colored-tag>
      </div>
      <h3>Categorias XS ({{ engine.levelCategories.xs.length }})</h3>
      <div>
        <colored-tag v-for="c in engine.levelCategories.xs" :key="c" class="ml-3" :text="c"></colored-tag>
      </div>
      <h3>Categorias S ({{ engine.levelCategories.s.length }})</h3>
      <div>
        <colored-tag v-for="c in engine.levelCategories.s" :key="c" class="ml-3" :text="c"></colored-tag>
      </div>
      <h3>Categorias M ({{ engine.levelCategories.m.length }})</h3>
      <div>
        <colored-tag v-for="c in engine.levelCategories.m" :key="c" class="ml-3" :text="c"></colored-tag>
      </div>
      <h3>Categorias L ({{ engine.levelCategories.l.length }})</h3>
      <div>
        <colored-tag v-for="c in engine.levelCategories.l" :key="c" class="ml-3" :text="c"></colored-tag>
      </div>
      <h3>Categorias XL ({{ engine.levelCategories.xl.length }})</h3>
      <div>
        <colored-tag v-for="c in engine.levelCategories.xl" :key="c" class="ml-3" :text="c"></colored-tag>
      </div>

      <hr />

      <h3>Categorias Obtenidas ({{ engine.activeCategories.length }})</h3>
      <b-card-group deck>
        <categoria-item v-for="c in engine.activeCategories" :key="c.categoria" :categoria="c"></categoria-item>
      </b-card-group>

      <hr />

      <h3>Listado de Chunks</h3>

      <br />

      <h3>Chunks <b-badge pill>XS</b-badge></h3>
      <b-card-group deck>
        <chunk-item v-for="c in engine.chunks.xs" :key="c.categoria" :chunk="c"></chunk-item>
      </b-card-group>

      <h3>Chunks <b-badge pill>S</b-badge></h3>
      <b-card-group deck>
        <chunk-item v-for="c in engine.chunks.s" :key="c.categoria" :chunk="c"></chunk-item>
      </b-card-group>

      <h3>Chunks <b-badge pill>M</b-badge></h3>
      <b-card-group deck>
        <chunk-item v-for="c in engine.chunks.m" :key="c.categoria" :chunk="c"></chunk-item>
      </b-card-group>

      <h3>Chunks <b-badge pill>L</b-badge></h3>
      <b-card-group deck>
        <chunk-item v-for="c in engine.chunks.l" :key="c.categoria" :chunk="c"></chunk-item>
      </b-card-group>

      <h3>Chunks <b-badge pill>XL</b-badge></h3>
      <b-card-group deck>
        <chunk-item v-for="c in engine.chunks.xl" :key="c.categoria" :chunk="c"></chunk-item>
      </b-card-group>
    </b-card>
  </main>
</template>

<script>
import _ from 'lodash';
import Chunk from '@/common/chunk'
import Categoria from '@/common/categoria'
import CategoriaItem from '~/components/CategoriaItem.vue';
const consola = require('consola')
const faker = require('faker');

export default {
  name: 'IndexPage',
  components: { CategoriaItem },
  data() {
    return {
      probabilidades: {
        c1: 0,
        c2: 0,
        c3: 0,
        c4: 0,
        c5: 0,
        rxs: 0,
        rs: 0,
        rm: 0,
        rl: 0,
        rxl: 0
      },
      nivel: {
        xs: 0,
        s: 0,
        m: 0,
        l: 0,
        xl: 0
      },
      chunks: {
        xs: 0,
        s: 0,
        m: 0,
        l: 0,
        xl: 0,
        categories: 0,
      },
      opciones: {
        starvation: true
      },
      combos: {
        starvation: [{ value: true, text:'True'}, { value: false, text:'False'}],
        activeCardIndex: 0,
        showResult: false
      },
      engine: {
        activeCategories: [],
        categories: [],
        levelCategories: {
          xs: [],
          s: [],
          m: [],
          l: [],
          xl: [],
        },
        chunks: {
          xs: [],
          s: [],
          m: [],
          l: [],
          xl: [],
        }
      }
    }
  },
  methods: {
    rellenarDatosBase() {
      this.probabilidades = {
        c1: 20,
        c2: 40,
        c3: 25,
        c4: 15,
        c5: 0,
        rxs: 0,
        rs: 65,
        rm: 40,
        rl: 20,
        rxl: 40
      }

      this.nivel = {
        xs: 2,
        s: 2,
        m: 4,
        l: 2,
        xl: 1
      }

      this.chunks = {
        xs: 10,
        s: 8,
        m: 7,
        l: 7,
        xl: 5,
        categories: 10,
      }
    },
    printGameStatus() {
      consola.log('"""""""""""""""""""""""""""""""""""""""""""')
      consola.log(`Chunks XS [${this.nivel.xs}]`)
      consola.log(`XS: [${this.engine.chunks.xs.map(x => x.name.toUpperCase()).join(', ')}]`)
      // consola.log('-------------------------------------------')
      consola.log(`Chunks S [${this.nivel.s}]`)
      consola.log(`S: [${this.engine.chunks.s.map(x => x.name.toUpperCase()).join(', ')}]`)
      // consola.log('-------------------------------------------')
      consola.log(`Chunks M [${this.nivel.m}]`)
      consola.log(`M: [${this.engine.chunks.m.map(x => x.name.toUpperCase()).join(', ')}]`)
      // consola.log('-------------------------------------------')
      consola.log(`Chunks L [${this.nivel.l}]`)
      consola.log(`L: [${this.engine.chunks.l.map(x => x.name.toUpperCase()).join(', ')}]`)
      // consola.log('-------------------------------------------')
      consola.log(`Chunks XL [${this.nivel.xl}]`)
      consola.log(`XL: [${this.engine.chunks.xl.map(x => x.name.toUpperCase()).join(', ')}]`)
      consola.log('"""""""""""""""""""""""""""""""""""""""""""')
    },
    generar() {
      this.combos.showResult = false
      this.resetEngine()

      // Numero de runs
      // const runs = 1 // TODO: Cambiar

      // Crear categorias
      _.times(this.chunks.categories, () => {
        let inserted = false
        while(!inserted) {
          const word = faker.commerce.productAdjective()
          if(!this.engine.categories.includes(word)) {
            this.engine.categories.push(word)
            inserted = true
          }
        }
      })
      consola.log('Listado de Categorias generado')
      consola.log(this.engine.categories)
      consola.log('--------------------------------------------')

      // Crear listas de chunks
      for (const key in this.engine.levelCategories) {
        if (Object.hasOwnProperty.call(this.engine.levelCategories, key)) {
          const shuffled = _.shuffle(this.engine.categories)
          const itemsToRemove = this.chunks[key] < 0 ? shuffled.length : shuffled.length - this.chunks[key]
          _.times(itemsToRemove, () => {
            shuffled.pop()
          })
          this.engine.levelCategories[key] = shuffled
          consola.log(`Categoria [${key}]`)
          consola.log(this.engine.levelCategories[key])
        }
      }
      consola.log('-------------------------------------------')
      consola.log('--------------------------------------------')

      // Iteration xs
      this.iteration('xs')
      this.printGameStatus()

      consola.log('-------------------------------------------')
      consola.log('--------------------------------------------')

      // Iteration s
      this.iteration('s')
      this.printGameStatus()

      consola.log('-------------------------------------------')
      consola.log('--------------------------------------------')

      // Iteration m
      this.iteration('m')
      this.printGameStatus()

      consola.log('-------------------------------------------')
      consola.log('--------------------------------------------')

      // Iteration l
      this.iteration('l')
      this.printGameStatus()

      consola.log('-------------------------------------------')
      consola.log('--------------------------------------------')

      // Iteration m
      this.iteration('xl')
      this.printGameStatus()

      consola.log('-------------------------------------------')
      consola.log('--------------------------------------------')

      consola.log('FIN')
      this.combos.showResult = true
    },
    resetEngine() {
      this.engine = {
        activeCategories: [],
        categories: [],
        levelCategories: {
          xs: [],
          s: [],
          m: [],
          l: [],
          xl: [],
        },
        chunks: {
          xs: [],
          s: [],
          m: [],
          l: [],
          xl: [],
        }
      }
    },
    iteration(level) {
      // Cleanup
      consola.log(`Iniciando nivel [${level}]...`)
      consola.log('Shuffle and clean')
      this.cleanActiveCategoriesAndShuffle()

      consola.log('************************************')

      // Obtener numero de chunks
      const chunksNivel = this.nivel[level]
      consola.log(`Chunks a sacar para este nivel [${chunksNivel}]`)
      if(chunksNivel === 0) {
        consola.log(`Nivel sin chunks, saltando a la siguiente iteracion...`)
        return
      }

      // Obtener categorias de nivel
      const levelCategories = this.engine.levelCategories[level]

      // Si la lista esta vacia, se añade aleatoriamente
      if(this.engine.activeCategories.length === 0) {
        consola.log(`Detectado nivel inicial, cargando [${chunksNivel}] categorias iniciales aleatoriamente`)

        // Si es el inicial, sacamos de forma aleatoria
        this.engine.activeCategories = levelCategories.splice(-chunksNivel).map((x, i) => {
          consola.log('************************************')
          return this.crearCategoria(x, i)
        })
        consola.log('************************************')

        consola.log(`Categorias nivel [${level}]`)
        consola.log('[' + this.engine.activeCategories.join(', ') + ']')

        consola.log(`Cargando [${chunksNivel}] chunks a nivel [${level}]`)
        this.engine.chunks[level] = this.engine.activeCategories.map((x, i) => this.crearChunk(x, i, level))
        return
      }

      let breakTimes = 0
      let categoriaIndex = 0
      _.times(chunksNivel, (i) => {
        breakTimes++
        consola.log('Calculo de iteracion #' + i)
        // Calcular probabilidad de ruptura
        const isBroken = this.categoriaBreak(level, breakTimes)

        // Calculo de break
        if(isBroken) {
          // Añadimos nueva categoria de la lista
          const nuevaCat = this.getRandomCategoria(this.engine.activeCategories.map(x => x.categoria), level)
          const catObj = this.crearCategoria(nuevaCat, i)
          this.engine.activeCategories.push(catObj)

          // Creamos chunk de esa categoria
          this.engine.chunks[level].push(this.crearChunk(catObj, i, level))
          consola.log('************************************')
          return
        }

        // Cogemos la categoria en base a categoria index
        consola.log('Obteniendo categoria de la lista...')
        const nextCatResult = this.getNextCategoria(categoriaIndex, level, i)
        categoriaIndex = nextCatResult.index
        consola.log(`Nuevo index para siguiente iteracion [${categoriaIndex}]`)

        // Sacamos un chunk de esta categoria
        this.engine.chunks[level].push(this.crearChunk(nextCatResult.cat, i, level))

        consola.log('************************************')
      })
    },
    cleanActiveCategoriesAndShuffle() {
      consola.log('Array inicial')
      consola.log('[' + this.engine.activeCategories.join(', ') + ']')

      this.engine.activeCategories = _.shuffle(this.engine.activeCategories)

      consola.log('Array final')
      consola.log('[' + this.engine.activeCategories.join(', ') + ']')
    },
    crearChunk(categoria, i, level) {
      consola.log(`Creando chunk...`)
      const chunk = new Chunk(level, i, categoria.categoria)
      consola.log(`Chunk #${i} de categoria [${categoria.categoria}] --- ${chunk.name.toUpperCase()}`)
      categoria.usage++
      return chunk
    },
    crearCategoria(name, i) {
      consola.log(`Creando categoria...`)
      const categoria = new Categoria(i, name)
      consola.log(`Categoria #${i} de categoria [${name}]`)
      categoria.limit = this.categoriaRepetition()

      return categoria
    },
    categoriaBreak(level, times) {
      consola.log('Calculo de nueva categoria...')
      const r = Math.random()
      consola.log(`Valor obtenido [${r}]`)

      const prob = (this.probabilidades['r'+ level] * 0.01) / times

      const isBroken = r <= prob

      consola.log(`Rango entre [0] y [${prob}]`)
      consola.log(`Categoria break [${isBroken}]`)

      return isBroken
    },
    categoriaRepetition() {
      consola.log('Calculo de repeticion de categoria...')
      const r = Math.random()
      consola.log(`Valor obtenido [${r}]`)

      const repeticion1 = this.probabilidades.c1 * 0.01
      const repeticion2 = (this.probabilidades.c2 * 0.01) + repeticion1
      const repeticion3 = (this.probabilidades.c3 * 0.01) + repeticion2
      const repeticion4 = (this.probabilidades.c4 * 0.01) + repeticion3
      const repeticion5 = (this.probabilidades.c5 * 0.01) + repeticion4

      switch(true) {
          case (r <= repeticion1): {
              consola.log(`Rango entre [0] y [${repeticion1}]`)
              consola.log(`Repeticion de categoria [1]`)
              return 1
          }
          case (r <= repeticion2): {
              consola.log(`Rango entre [${repeticion1}] y [${repeticion2}]`)
              consola.log(`Repeticion de categoria [2]`)
              return 2
          }
          case (r <= repeticion3): {
              consola.log(`Rango entre [${repeticion2}] y [${repeticion3}]`)
              consola.log(`Repeticion de categoria [3]`)
              return 3
          }
          case (r <= repeticion4): {
              consola.log(`Rango entre [${repeticion3}] y [${repeticion4}]`)
              consola.log(`Repeticion de categoria [4]`)
              return 4
          }
          case (r <= repeticion5): {
              consola.log(`Rango entre [${repeticion4}] y [${repeticion5}]`)
              consola.log(`Repeticion de categoria [5]`)
              return 5
          }
          default: {
            consola.error('Error de rangos')
            return 0
          }
      }
    },
    getRandomCategoria(alreadyUsed, level) {
      consola.log('Obteniendo nueva categoria')
      consola.log(`Listado de categorias de nivel [${level}]`)
      consola.log(this.engine.levelCategories[level])

      const availableLevelCategories = _.shuffle(this.engine.levelCategories[level].filter(x => !alreadyUsed.includes(x)))

      consola.log(`Categorias filtradas`)
      consola.log(availableLevelCategories)

      const cat = availableLevelCategories.pop()

      consola.log(`Categoria escogida [${cat}]`)

      return cat
    },
    getNextCategoria(categoriaIndex, level, id) {
      // Obtenemos las categorias activas pero quitamos las que tengan chunks que hayan salido
      const chunksActivos = this.engine.chunks[level].map(x => x.categoria)
      consola.log(`Chunks activos en esta categoria [${chunksActivos.join(', ')}]`)
      const categorias = this.engine.activeCategories.filter(x => !chunksActivos.includes(x.categoria))
      consola.log('Ignorando chunks activos, lista final de categorias:')
      consola.log(categorias)

      // Recorremos todo el array de activos para sacar el siguiente
      let index = categoriaIndex >= this.engine.levelCategories.length ? 0 : categoriaIndex
      consola.log(`Recorriendo el array de categorias activas desde el index [${categoriaIndex}]`)
      for (let i = 0; i < categorias.length; i++) {
        consola.log(`Buscando en index [${index}] de la lista de categorias activas`)
        const cat = categorias[index]

        // Si es correcta, terminamos
        if(cat && cat.usable) {
          consola.log(`Categoria obtenida [${cat}] en index [${index}]`)
          consola.log('Listado de categorias:')
          consola.log(this.engine.activeCategories)
          return {
            cat,
            index: index + 1
          }
        }

        // Si no, pasamos a la siguiente
        consola.log(`Categoria no usable [${cat}], pasando a la siguiente...`)

        index = (index + 1) % categorias.length
      }

      // Si no hay mas en la lista, se añade una
      consola.log('No se han obtenido categorias usables en la lista, obteniendo nueva')
      const cat = this.getRandomCategoria(categorias.map(x => x.categoria), level)

      // Se genera la categoria y se añade al listado
      const catObj = this.crearCategoria(cat, id)
      this.engine.activeCategories.push(catObj)

      return {
        cat: catObj,
        index: 0
      }
    }
  }
}
</script>
