<template>
  <div >
      <div v-if="permiso == 1">
          <menuAdministrador></menuAdministrador>
      </div>
      <div v-if="permiso == 2">
          <menuGerente></menuGerente>
      </div>
      <div v-if="permiso == 3">
          <menuJefeBodega></menuJefeBodega>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

import menuAdministrador from '@/components/menus/menuAdministrador.vue'
import menuGerente from '@/components/menus/menuGerente.vue'
import menuJefeBodega from '@/components/menus/menuJefeBodega.vue'

export default {
  name: 'Menu',
  components: {
    menuAdministrador,
    menuGerente,
    menuJefeBodega
  },
  data() {
      return {
          permiso: sessionStorage.getItem('permiso') || null,
          pintar: ''
      }

  }

}
</script>