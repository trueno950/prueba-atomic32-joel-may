<script setup>
import { ref } from 'vue'
const count = ref(0)

</script>

<template>
    <div class="grid footer-contain">
        <div class="col-8">
            <p class="ml-7">
                <span class="font-bold text-1xl">2023 AtomicLabs. Todos los derechos reservados.</span>
            </p>
        </div>
        <div class="col-2">
            <p>
                <span class="font-bold text-1xl">Aviso de privacidad</span>
            </p>
        </div>
        <div class="col-2">
            <img alt="" src="../../../assets/linkedin.png" />
            <img alt="" src="../../../assets/twitter.png" class="ml-5" />
        </div>
    </div>
</template>

<style scoped>
.footer-contain {
    background: #060606;
    color: #fff;
    border-radius: none;
    padding: 2.5em;
    height: 10em;
    margin: 0;
}
</style>
