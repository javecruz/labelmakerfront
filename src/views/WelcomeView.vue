<template>
  <div class="row h-80">  
    <div class="app-bg-color col-12 col-lg-10 offset-lg-1 py-5 h-100">
      <div class="row pt-5">
        <div class="col-12 col-lg-6 pt-5">
          <FrontLabel :textValue=exampleFrontText></FrontLabel>
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
    },
    setup() {
      return {
        exampleFrontText: "YOUR OWN TEXT"
      }
    }
    
  }
</script>

<style scoped>

</style>