
<template>
    <div class="col-12 d-flex justify-content-center py-5">
        <p class="d-block">
            Hello Developer-to-be! Let's make some customised chocolate bar covers
        </p>
    </div>
        <div class="col-12 d-flex justify-content-center">
        <button type="button" class="btn btn-primary btn-lg custom-button" @click="$router.push('create')">START</button>
    </div>
</template>


<script>

export default {
    setup() {}
}
</script>

<style scoped>
    .custom-button {
        background: #24B5BC;
    }
    .custom-button:hover {
        background: #0e2d6b;
    }
</style>

