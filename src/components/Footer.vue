<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <Card>
        <template #content>
            <div class="grid">
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
                    <img alt="" src="../assets/linkedin.png" />
                    <img alt="" src="../assets/twitter.png" class="ml-5" />
                </div>
            </div>
        </template>
    </Card>
</template>

<style scoped>
.p-card {
    background: #060606;
    color: #fff;
    border-radius: none;
}
</style>
