<template>
  <div>
      <Menu></Menu>
      <agregarComponent></agregarComponent>
  </div>
</template>

<script>
import agregarComponent from '@/components/Usuarios/agregarComponent.vue'
import Menu from '@/views/Menu.vue'
export default {
    name: 'Usuario',
    components: {
        agregarComponent,
        Menu
    }

}
</script>

<style>

</style>