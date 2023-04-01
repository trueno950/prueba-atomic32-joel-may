<script>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import image1 from '../../../../public/assets/Group 4024@2x.png'
import image2 from '../../../../public/assets/Group 4026.png'

export default {
    setup() {
        const store = useStore();
        const phone = computed(()=>store.getters.getPhone);
        const codePhone = ref('');
        const isCodePhoneValid = ref(false);

        const codePhoneErrorMessage = computed(() => {
            if (!isCodePhoneValid.value) {
                return 'El código debe contener 6 dígitos';
            }
        });

        const disabledButton = computed(() => {
            if (isCodePhoneValid.value) {
                return false;
            } else {
                return true;
            }
        });

        const resendCode = () =>{
            store.commit('updateSendingCode');
        }
        

        const prevStep = () => {
            store.commit('prevStep');
        };

        const nextStep = () => {
            store.commit('updateSendingValidate');
        };

        watch(codePhone, (newVal) => {
            const regexTelefono = /^\+?[1-9]\d{5}$/
            isCodePhoneValid.value = (regexTelefono.test(newVal.trim()));
        });

        return {
            prevStep,
            nextStep,
            resendCode,
            phone,
            codePhone,
            isCodePhoneValid,
            codePhoneErrorMessage,
            disabledButton,
            image1,
            image2,
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
        <img :src="image1" class="mr-3">
        <p class="text-left white-space-nowrap">
            <span class="font-bold text-6xl" style="color: white;">CÓDIGO DE </span>
            <span class="font-bold text-6xl" style="color: orangered;">VERIFICACIÓN</span>
        </p>
    </div>
    <div class="flex align-items-center justify-content-start">
        <p class="text-left white-space-nowrap">
            <span class="font-bold text-3xl" style="color: white;">
                Te enviamos un SMS al número:
            </span><br />
            <span class="font-bold text-2xl" style="color: white;">
                {{ phone }} <img :src="image2" alt="">
            </span>
        </p>
    </div>
    <div>
        <p class="text-left white-space-nowrap">
            <span class="font-bold text-1xl mb-4" style="color: white;">
                Ingresa el código de verificación:
            </span>
        </p>
    </div>
    <div class="flex align-items-center justify-content-start">
        <div class="flex flex-column gap-2">
            <label for="last-name" class="text-1xl" style="color: white;">Código de verificación</label>
            <span class="p-input-icon-right">
                <i class="pi pi-verified" />
                <InputText id="last-name" v-model="codePhone" aria-describedby="last-name-help"
                    :class="{ 'p-invalid': !isCodePhoneValid }" :error-message="codePhoneErrorMessage" />
            </span>
            <small class="p-error" id="text-error">{{ codePhoneErrorMessage || '&nbsp;' }}</small>
        </div>

    </div>
    <div>
        <p class="text-left white-space-nowrap">
            <span class="text-1xl mb-4" style="color: white;">
                ¿No recibiste el código?
            </span>
            <span @click="resendCode" class="font-bold text-1xl underline custom-text" style="color: white;">
                Reenviar código
            </span>

        </p>
    </div>
    <div class="flex align-items-center justify-content-end mr-8">
        <Button :disabled="disabledButton" @click="nextStep" class="mr-8">Validar código</Button>
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
