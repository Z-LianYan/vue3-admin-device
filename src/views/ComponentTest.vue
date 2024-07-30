<template>
    <!-- <div>
      <slot></slot>
      <slot name="title"></slot>
      <slot name="content"></slot>
      <slot name="footer"></slot>
    </div> -->
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main> 
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
 
</style>