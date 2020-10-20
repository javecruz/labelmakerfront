<template>
  <div class="row h-100">  
    <div class="create-label-container col-12 col-lg-10 offset-lg-1 py-5 h-100">
      <div class="row pb-2 align-items-center">
        <div class="col-12 col-lg-5">
          <FrontLabel></FrontLabel>
        </div>
        <div class="col-12 col-lg-7">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Front text here." aria-describedby="basic-addon1">
          </div>
        </div>
      </div>
      <div class="row pt-2 align-items-center">
        <div class="col-12 col-lg-5">
          <BackLabel></BackLabel>
        </div>
        <div class="col-12 col-lg-7">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Back text here." aria-describedby="basic-addon1">
          </div>
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
  .create-label-container {
    background-color: rgba(255, 255, 255, 0.6);
    height: 300px;
  }
</style>