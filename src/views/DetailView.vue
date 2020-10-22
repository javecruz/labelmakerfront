<template>
  <div class="row h-100">
    <div class="app-bg-color col-12 col-lg-10 offset-lg-1 py-5 h-100">
      <div class="row">
        <div class="col-12 col-lg-5">
          <div class="row">
            <div class="col-12 pb-2">
              <FrontLabel :textValue=frontText></FrontLabel>
            </div>
            <div class="col-12 pt-2">
              <BackLabel :textValue=backText></BackLabel>
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
  import { onMounted, ref } from 'vue'
  import FrontLabel from '../components/FrontLabel.vue'
  import BackLabel from '../components/BackLabel.vue'
  import { getLabel } from '../services/LabelService.js';
  

  export default {
    components: {
      FrontLabel,
      BackLabel
    },
    props: {
      labelId: {type: String, required: true}
    },
    setup(props) {
      let frontText = ref("")
      let backText = ref("")
      onMounted(() => {
        let promise = getLabel(props.labelId)
        promise.then((data) => {
          frontText.value = data.front_text ? data.front_text : ""
          backText.value = data.back_text ? data.back_text : ""
        })
      })
      return {
        frontText,
        backText
      }
    }
  }
</script>

<style scoped>

</style>