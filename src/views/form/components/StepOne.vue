<script>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const lastName = ref('');
        const isLastNameValid = ref(true);

        watch(lastName, (newVal) => {
            isLastNameValid.value = newVal.length >= 5;
        });

        const lastNameErrorMessage = computed(() => {
            if (!isLastNameValid.value) {
                return 'Los apellidos deben tener al menos 5 caracteres';
            }
        });
        const nextStep = () => {
            store.commit('nextStep');
        };

        return {
            nextStep,
            lastName,
            isLastNameValid,
            lastNameErrorMessage
        };
    }
};
</script>

<template>
    <div class="flex align-items-center justify-content-start mt-5">
        <img src="../../../assets/Group 4015@2x.png" class="mr-3">
        <p class="text-left white-space-nowrap">
            <span class="font-bold text-6xl" style="color: white;">TE QUEREMOS </span>
            <span class="font-bold text-6xl" style="color: orangered;">CONOCER</span>
        </p>
    </div>
    <div class="flex align-items-center justify-content-start">
        <p class="text-left white-space-nowrap">
            <span class="font-bold text-3xl" style="color: white;">
                Queremos saber que eres tú, por favor ingresa los siguientes datos:
            </span>
        </p>
    </div>
    <div class="flex align-items-center justify-content-start mb-3">
        <div class="flex flex-column gap-2">
            <label for="name" class="text-1xl" style="color: white;">Nombre(s)</label>
            <span class="p-input-icon-right">
                <i class="pi pi-lock" />
                <InputText id="name" aria-describedby="name-help" />
            </span>
        </div>
    </div>
    <div class="flex align-items-center justify-content-start">
        <div class="flex flex-column gap-2">
            <label for="last-name" class="text-1xl" style="color: white;">Apellidos</label>
            <span class="p-input-icon-right">
                <i class="pi pi-lock" />
                <InputText id="last-name" v-model="lastName" aria-describedby="last-name-help"
                    :class="{ 'p-invalid': !isLastNameValid }" :error-message="lastNameErrorMessage" />
            </span>
            <small class="p-error" id="text-error">{{ lastNameErrorMessage || '&nbsp;' }}</small>
        </div>

    </div>
    <div class="flex align-items-center justify-content-end mr-8">
        <Button @click="nextStep" class="mr-8">Enviar</Button>
    </div>
</template>

<style scoped>
.p-card {
    background: transparent;
    margin: 2em;
    box-shadow: none;
}

.p-card-header img {
    position: absolute;
    margin-top: 10px;
    margin-left: 20px;
    width: 10%;
}

.p-progressbar-value {
    background: orangered !important;
}

.p-input-icon-right {
    display: grid
}
</style>
