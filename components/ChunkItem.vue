<template>
  <b-card
    header-class="hide-border text-center"
    no-body
    style="max-width: 20rem;"
  >
    <div slot="header" :style="{'background-color': bg, color: color}" >
      <span class="badge colored-badge">{{ chunk.name }}</span>
    </div>
    <b-list-group flush>
      <b-list-group-item class="d-flex justify-content-between align-items-center">Categoria<b-badge variant="info">{{ chunk.categoria }}</b-badge></b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">Nivel<b-badge class="font-weight-bold" variant="primary">{{ chunk.nivel.toUpperCase() }}</b-badge></b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<script>
import { stringToHash, randomColorFromSeed, getContrastYIQ } from '@/common/utils'

export default {
  props: {
    chunk: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    bg() {
      const hash = stringToHash(this.chunk.categoria)
      return randomColorFromSeed(hash)
    },
    color() {
      return getContrastYIQ(this.bg)
    }
  }
}
</script>

<style scoped>
.hide-border {
  padding: 0
}
</style>
