<script>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
import image1 from "../../../../public/assets/Group 4023@2x.png";

export default {
  setup() {
    const store = useStore();
    const phone = ref("");
    const isPhoneValid = ref(true);

    const phoneErrorMessage = computed(() => {
      if (!isPhoneValid.value) {
        return "El número de celular debe contener 10 dígitos";
      }
    });

    const disabledButton = computed(() => {
      if (isPhoneValid.value) {
        return false;
      } else {
        return true;
      }
    });

    const prevStep = () => {
      store.commit("prevStep");
    };

    const nextStep = () => {
      store.commit("updatePhone", phone.value);
      store.commit("nextStep");
    };

    watch(phone, (newVal) => {
      const regexTelefono = /^\+?[1-9]\d{9,11}$/;
      isPhoneValid.value = regexTelefono.test(newVal.trim());
    });

    return {
      prevStep,
      nextStep,
      phone,
      isPhoneValid,
      phoneErrorMessage,
      disabledButton,
      image1,
    };
  },
};
</script>

<template>
  <div>
    <p @click="prevStep" class="custom-text">
      <i class="pi pi-chevron-left px-2" style="color: white"></i>
      <span class="font-bold text-1xl" style="color: white">Regresar</span>
    </p>
  </div>
  <div class="flex align-items-center justify-content-start mt-5">
    <img :src="image1" class="mr-3" />
    <p class="text-left">
      <span class="font-bold text-6xl" style="color: white">VALIDA TU </span>
      <span class="font-bold text-6xl" style="color: orangered">CELULAR</span>
    </p>
  </div>
  <div class="flex align-items-center justify-content-start">
    <p class="text-left">
      <span class="font-bold text-3xl" style="color: white">
        Necesitamos validar tu número para continuar </span
      ><br />
      <span class="font-bold text-2xl" style="color: white">
        Ingresa tu número a 10 dígitos y te enviaremos un código SMS
      </span>
    </p>
  </div>
  <div class="flex align-items-center justify-content-start">
    <div class="flex flex-column gap-2">
      <label for="last-name" class="text-1xl" style="color: white"
        >Número de Celular</label
      >
      <span class="p-input-icon-right">
        <i class="pi pi-phone" />
        <InputText
          id="last-name"
          v-model="phone"
          aria-describedby="last-name-help"
          :class="{ 'p-invalid': !isPhoneValid }"
          :error-message="phoneErrorMessage"
        />
      </span>
      <small class="p-error" id="text-error">{{
        phoneErrorMessage || "&nbsp;"
      }}</small>
    </div>
  </div>
  <div class="flex align-items-center justify-content-end mr-8">
    <Button :disabled="disabledButton" @click="nextStep" class="mr-8"
      >Continuar</Button
    >
  </div>
</template>

<style scoped>
@media only screen and (max-width: 576px) {
  .text-6xl {
    font-size: 1.5rem !important;
  }
}
.p-input-icon-right {
  display: grid;
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
