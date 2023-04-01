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
    <div class="flex align-items-center justify-content-start mt-5 ml-4">
        <p class="text-left white-space-nowrap">
            <span class="font-bold text-6xl" style="color: white;">TUS DATOS </span><br/>
            <span class="font-bold text-6xl" style="color: orangered;">HAN SIDO ENVIADOS</span><br/>
            <span class="font-bold text-6xl" style="color: orangered;">CON ÉXITO</span>
        </p>
    </div>
    <div class="flex align-items-center justify-content-start mt-2 ml-4">
        <p class="text-left white-space-nowrap">
            <span class="font-bold text-2xl" style="color: white;">
                En breve recibirás un correo de confirmación
            </span><br/>
            <span class="font-bold text-2xl" style="color: white;">
                por parte del equipo de AtomicLabs.
            </span>
        </p>
    </div>
    <div class="flex align-items-center justify-content-start mb-2 ml-4">
        <p class="text-left white-space-nowrap">
            <span class="font-bold text-1xl" style="color: white;">
                Recuerda revisar tu bandeja de SPAM
            </span><br/>
            <span class="font-bold text-1xl" style="color: white;">
                ¡Esperamos verte pronto!
            </span>
        </p>
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
