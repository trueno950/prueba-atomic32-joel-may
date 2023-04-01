<script>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import image1 from '../../../../public/assets/Group 4015@2x.png'

export default {
    setup() {
        const store = useStore();
        const name = ref('');
        const lastName = ref('');
        const isNameValid = ref(true);
        const isLastNameValid = ref(true);

        const lastNameErrorMessage = computed(() => {
            if (!isLastNameValid.value) {
                return 'Los apellidos deben tener al menos 5 caracteres';
            }
        });


        const nameErrorMessage = computed(() => {
            if (!isNameValid.value) {
                return 'El nombre debe tener al menos 3 caracteres';
            }
        });

        const disabledButton = computed(() => {
            if (isLastNameValid.value && isNameValid.value && name.value.trim() !== '' && lastName.value.trim() !== '') {
                return false;
            } else {
                return true;
            }
        });
        const nextStep = () => {
            store.commit('nextStep');
        };

        watch(lastName, (newVal) => {
            isLastNameValid.value = newVal.length >= 5;
        });

        watch(name, (newVal) => {
            isNameValid.value = newVal.length >= 3;
        });

        return {
            nextStep,
            name,
            lastName,
            isNameValid,
            isLastNameValid,
            nameErrorMessage,
            lastNameErrorMessage,
            disabledButton,
            image1
        };
    }
};
</script>

<template>
    <div class="flex align-items-center justify-content-start mt-5">
        <img :src="image1" class="mr-3">
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
                <InputText id="name" v-model="name" aria-describedby="name-help" :class="{ 'p-invalid': !isNameValid }"
                    :error-message="nameErrorMessage" />
            </span>
            <small class="p-error" id="text-error">{{ nameErrorMessage || '&nbsp;' }}</small>
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
        <Button :disabled="disabledButton" @click="nextStep" class="mr-8">Enviar</Button>
    </div>
</template>

<style scoped>

.p-input-icon-right {
    display: grid
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
