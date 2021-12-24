<template>
  <b-card
    header-class="hide-border text-center"
    no-body
    style="max-width: 20rem;"
  >
    <div slot="header" :style="{'background-color': bg, color: color}" >
      <span class="badge colored-badge">{{ categoria.categoria }}</span>
    </div>
    <b-list-group flush>
      <b-list-group-item class="d-flex justify-content-between align-items-center">Limit<b-badge variant="info">{{ categoria.limit }}</b-badge></b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">Usage<b-badge variant="info">{{ categoria.usage }}</b-badge></b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">Usable<b-badge :variant="categoria.usable ? 'success' : 'danger'">{{ categoria.usable }}</b-badge></b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<script>
import { stringToHash, randomColorFromSeed, getContrastYIQ } from '@/common/utils'

export default {
  props: {
    categoria: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    bg() {
      const hash = stringToHash(this.categoria.categoria)
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
