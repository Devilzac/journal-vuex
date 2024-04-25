<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
        <input
        type="text"
        placeholder="Buscar entrada"
        class="form-control">
    </div>
    <div class="entry-scrollarea">
        <EntryComponent
            v-for="item in 100"
            :key="item"
            />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        EntryComponent: defineAsyncComponent(()=> import('./EntryComponent.vue'))
    }
}
</script>

<style lang="scss" soped>
.entry-list-container{
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);
}
.entry-scrollarea{
    height: calc(100vh - 102px);
    overflow-y: scroll;
}
</style>