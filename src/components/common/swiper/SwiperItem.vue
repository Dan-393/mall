<template>
  <div class='slide'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'Slide'
}

</script>
<style scoped>
  .slide{
    width: 100%;
    /* 值为0，表示不减小 */
    flex-shrink: 0;
  }
  .slide img{
    width: 100%;
  }

</style>