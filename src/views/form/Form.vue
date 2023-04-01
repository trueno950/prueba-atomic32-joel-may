<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import Footer from '../landing/components/Footer.vue';
import StepOne from './components/StepOne.vue';

export default {
  components: {
    Footer,
    StepOne
  },
  setup() {
    const store = useStore();
    const step = computed(() => store.getters.getStep);
    const progress = computed(() => store.getters.getProgress);

    const nextStep = () => {
      store.commit('nextStep');
    };

    const prevStep = () => {
      store.commit('prevStep');
    };
    const submitForm = () => {
      // Lógica para enviar el formulario
    };

    return {
      step,
      progress,
      nextStep,
      prevStep,
      submitForm
    };
  }
};
</script>

<template>
  <div>
    <Card>
      <template #header>
        <img alt=""
          src="https://static.wixstatic.com/media/1763b9_e442ddad423247d88c8705d7bdbe2a6e~mv2.png/v1/fill/w_162,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LogotipoAtomic32_Blco.png" />
      </template>
      <template #content>
        <div class="grid">
          <div class="col-9 align-content-center mt-8">
            <ProgressBar :showValue="false" :value="progress"></ProgressBar>
            <div v-show="step === 1">
              <StepOne />
            </div>
            <div v-show="step === 2">
              <!-- Contenido del segundo paso del formulario -->
              <Button @click="prevStep">Anterior</Button>
              <Button @click="nextStep">Siguiente</Button>
            </div>
            <div v-show="step === 3">
              <!-- Contenido del tercer paso del formulario -->
              <Button @click="prevStep">Anterior</Button>
              <Button @click="nextStep">Siguiente</Button>
            </div>
            <div v-show="step === 4">
              <!-- Contenido del cuarto paso del formulario -->
              <Button @click="prevStep">Anterior</Button>
              <Button @click="submitForm">Enviar</Button>
            </div>
          </div>
          <div class="col-3">
            <div class="flex align-items-center justify-content-center mr-6">
              <img src="../../assets/Group 4038.png" alt="">
            </div>
          </div>
        </div>
      </template>
    </Card>
    <Footer />

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
</style>
