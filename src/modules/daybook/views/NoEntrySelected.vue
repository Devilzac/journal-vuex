<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">
        No hay nada seleccionado
    </h1>
    <FabComponent />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {

    components:{
        FabComponent: defineAsyncComponent(()=>import('../components/FabComponent.vue'))
    }
}
</script>

<style land="scss" scoped>
    div{
        height: 100%;
    }
</style>