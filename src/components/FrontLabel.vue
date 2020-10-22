<template>
    <div class="tablet-container">
        <div class="text-container">
            {{ textContent }}
        </div>
        <div class="watermark">
        PREVIEW
        </div>
    </div>
</template>


<script>
    import { toRef } from 'vue';

    export default {
        props: {
            textValue: String
        },
        setup(props) {
            return {
                textContent: toRef(props, "textValue")
            }
        }
    }
</script>


<style scoped>
    .tablet-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        background: #0E2D6B;
        border-radius: 15px;
        box-shadow: inset 0 0 10px #000000;
    }

    .tablet-container:before{
        content: "";
        display: block;
        padding-top: 35%;
    }

    .text-container {
        color: #ffffff;
        transform: rotate(-12deg);
        font-size: 3vw;
        z-index: 100
    }

    .watermark {
        position: absolute;
        transform: rotate(-12deg);
        font-size: 3vw;
        right: 20%;
        bottom: 20%;
        color: #0E2D6B;
        text-shadow: -1px 0 #818181, 0 1px #818181, 1px 0 #818181, 0 -1px #818181;
    }
</style>