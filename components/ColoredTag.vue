<template>
  <b-badge class="colored-badge" :style="{'background-color': bg, color: color}">
    {{ text }}
  </b-badge>
</template>

<script>
import { stringToHash, randomColorFromSeed, getContrastYIQ } from '@/common/utils'

export default {
  props: {
    text: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    bg() {
      const hash = stringToHash(this.text)
      return randomColorFromSeed(hash)
    },
    color() {
      return getContrastYIQ(this.bg)
    }
  }
}
</script>

<style>
  .colored-badge {
    padding: 1rem;
    font-size: 1.2rem;
  }
</style>
