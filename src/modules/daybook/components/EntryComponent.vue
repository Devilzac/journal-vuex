<template>
  <div class="entry-container mb-3 pointer p-2"
  @click="$router.push({name: 'entry', params:{ id:1 }})">
    <!-- Titulo -->
      <div class="entry-title d-flex">
          <span class="text-success fs-5 fw-bold">15</span>
          <span class="mx-1 fs-5">julio</span>
          <span class="mx-2 fw-light">2021, jueves</span>
      </div>
      <div class="entry-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis quis inventore voluptas quibusdam porro possimus recusandae enim fugit non debitis, est placeat saepe id reprehenderit. Repellendus cupiditate aperiam voluptatem!
      </div>
  </div>
</template>

<script>
export default {
  props:{
  }
}
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover{
    background-color: lighten($color: grey, $amount: 45);
  }
  .entry-description{
    font-size: 11px;
  }
}
</style>