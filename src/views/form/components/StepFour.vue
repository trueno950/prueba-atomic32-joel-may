<script>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const checkTerms = ref(false);

        const disabledButton = computed(() => {
            if (checkTerms.value) {
                return false;
            } else {
                return true;
            }
        });

        const prevStep = () => {
            store.commit('prevStep');
        };

        const nextStep = () => {
            store.commit('nextStep');
        };

        return {
            prevStep,
            nextStep,
            checkTerms,
            disabledButton
        };
    }
};
</script>

<template>
    <div>
        <p @click="prevStep" class="custom-text">
            <i class="pi pi-chevron-left px-2" style="color: white"></i>
            <span class="font-bold text-1xl" style="color: white;">Regresar</span>
        </p>
    </div>
    <div class="flex align-items-center justify-content-start mt-5">
        <img src="../../../assets/Group 4025@2x.png" class="mr-3">
        <p class="text-left white-space-nowrap">
            <span class="font-bold text-6xl" style="color: white;">TÉRMINOS Y </span>
            <span class="font-bold text-6xl" style="color: orangered;">CONDICIONES</span>
        </p>
    </div>
    <div class="flex align-items-center justify-content-start mt-2">
        <p class="text-left white-space-nowrap">
            <span class="font-bold text-2xl" style="color: white;">
                Por favor revisa nuestros términos y condiciones para este servicio:
            </span>
        </p>
    </div>
    <div class="flex align-items-center justify-content-start mb-2">
        <p class="text-left white-space-nowrap">
            <span class="font-bold text-1xl underline custom-text" style="color: white;">
                Consulta Términos y Condiciones
            </span>
        </p>
    </div>
    <div class="flex align-items-center justify-content-start mb-2">
        <div class="card flex justify-content-center">
            <div class="flex flex-column align-items-center gap-2 mr-3">
                <Checkbox v-model="checkTerms" :binary="true" />
            </div>
        </div>
        <p class="text-left white-space-nowrap">
            <span class="font-semibold text-0xl" style="color: white;">
                Acepto los Términos y Condiciones
            </span>
        </p>
    </div>
    <div class="flex align-items-center justify-content-end mr-8">
        <Button :disabled="disabledButton" class="mr-8">Enviar</Button>
    </div>
</template>

<style scoped>
.p-input-icon-right {
    display: grid
}

.custom-text {
    cursor: pointer;
}

.p-button {
    color: #ffffff;
    background: orangered;
    border: 1px solid orangered;
    padding: 0.5rem 3.75rem;
    font-size: 1rem;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    border-radius: 20px;
}
</style>
