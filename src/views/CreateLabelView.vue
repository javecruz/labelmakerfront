<template>
  <div class="row h-100">  
    <div class="app-bg-color col-12 col-lg-10 offset-lg-1 py-5 h-100">
      <div class="row pb-2 align-items-center">
        <div class="col-12 col-lg-5">
          <FrontLabel :textValue=userFrontText></FrontLabel>
        </div>
        <div class="col-12 col-lg-7">
          <div class="input-group mb-3">
            <input type="text" v-model="userFrontText" maxlength="14" class="form-control" placeholder="Front text here." aria-describedby="basic-addon1">
          </div>
        </div>
      </div>
      <div class="row pt-2 align-items-center">
        <div class="col-12 col-lg-5">
          <BackLabel :textValue=userBackText></BackLabel>
        </div>
        <div class="col-12 col-lg-7">
          <div class="input-group mb-3">
            <input type="text" v-model="userBackText" maxlength="50" class="form-control" placeholder="Back text here." aria-describedby="basic-addon1">
          </div>
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-7 offset-5 d-flex">
          <button type="button" class="btn btn-primary btn-lg custom-button m-auto">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	import { ref } from 'vue';
	import FrontLabel from '../components/FrontLabel.vue';
	import BackLabel from '../components/BackLabel.vue';

	export default {
		components: {
			FrontLabel, 
			BackLabel
		},
		setup() {
			return {
				userFrontText: ref(""),
				userBackText: ref("")
			}
		}
	}
</script>

<style scoped>

</style>