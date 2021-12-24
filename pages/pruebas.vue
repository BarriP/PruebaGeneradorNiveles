<template>
  <b-container fluid>
    <b-row>
      <categoria-item :categoria="cat"></categoria-item>
    </b-row>
  </b-container>
</template>

<script>
import Categoria from '~/common/categoria'
import CategoriaItem from '~/components/CategoriaItem.vue'
export default {
  components: { CategoriaItem },
  data() {
    return {
      cat: new Categoria(1, 'MI Categoraaia')
    }
  }
}
</script>

<style>

</style>
