<template>
  <div class="welcome-container col-12 col-lg-10 offset-lg-1 py-5">
    Hello there
    <FrontLabel></FrontLabel>
  </div>
</template>

<script>

import FrontLabel from '../components/FrontLabel';

export default {
  components: {
    FrontLabel
  }
}
</script>

<style scoped>
  .welcome-container {
    background-color: rgba(255, 255, 255, 0.6);
    height: 300px;
  }
</style>