<template>
  <div class="row h-80">  
    <div class="welcome-container col-12 col-lg-10 offset-lg-1 py-5 h-100">
      <div class="row pt-5">
        <div class="col-12 col-lg-6 pt-5">
          <FrontLabel></FrontLabel>
        </div>
        <div class="col-12 col-lg-6 pt-5">
          <WelcomeBox></WelcomeBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import FrontLabel from '../components/FrontLabel.vue';
import WelcomeBox from '../components/WelcomeBox.vue';

export default {
  components: {
    FrontLabel,
    WelcomeBox
  }
  
}
</script>

<style scoped>
  .welcome-container {
    background-color: rgba(255, 255, 255, 0.6);
    height: 300px;
  }

  .h-80 {
    height: 80%;
  }

  .h-100 {
    height: 100%;
  }

</style>