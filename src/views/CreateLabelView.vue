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
            <input type="text" v-model="userBackText" maxlength="24" class="form-control" placeholder="Back text here." aria-describedby="basic-addon1">
          </div>
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-7 offset-5 d-flex">
          <button type="button" class="btn btn-primary btn-lg custom-button m-auto" @click="triggerCreate()" :disabled="userFrontText.length == 0 || userBackText.length == 0 ? true : null">OK</button>
          <p v-if="isError">There was a server error.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue';
  
	import FrontLabel from '../components/FrontLabel.vue';
  import BackLabel from '../components/BackLabel.vue';
  import { createLabel } from '../services/LabelService.js';
  import { login } from '../services/AuthService';
  import router from '../router/index.js';


	export default {
		components: {
			FrontLabel, 
      BackLabel
		},
		setup() {
      let userFrontText = ref("")
      let userBackText = ref("")
      let isError = ref(false)
      let token = ref("")

      onMounted(() => {
        login()
          .then(res => {
            isError.value = false
            token.value = res.data.token
            console.log("TOKEN:" + res.data.token)
          })
          .catch(error => {
            console.log("There was an error loging in. " + error)
            isError.value = true
            })
      })

      function triggerCreate() {
        createLabel(
          {
            userFrontText: userFrontText.value,
            userBackText: userBackText.value
          },token.value)
          .then(res => {
            isError.value = false;
            console.log("Created label with id: " + res.data.id)
            router.push(`/detail/${res.data.id}`);
          })
          .catch(error => {
            console.log("There was an error creating label. " + error)
            isError.value = true
          })
      }

			return {
        // Vars
				userFrontText,
        userBackText,
        isError,
        token,
        // Methods
        triggerCreate
			}
		}
	}
</script>

<style scoped>

</style>