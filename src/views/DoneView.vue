<template>
  <div class="row h-100">
    <div class="app-bg-color col-12 col-lg-10 offset-lg-1 py-5 h-100">
      <div class="row">
        <div class="col-12 col-lg-5">
          <div class="row">
            <div class="col-12 pb-2">
              <FrontLabel textValue="YOUR OWN TEXT"></FrontLabel>
            </div>
            <div class="col-12 pt-2">
              <BackLabel textValue="Definitely. It's a longer text here for greetings."></BackLabel>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-7 mt-3">
          <p class="text-center">Thanks! We are ready now!</p>
          <button type="button" class="btn btn-primary btn-lg custom-button d-block m-auto">DONE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FrontLabel from '../components/FrontLabel.vue';
  import BackLabel from '../components/BackLabel.vue';

  export default {
      components: {
        FrontLabel,
        BackLabel
    }
  }
</script>

<style scoped>

</style>