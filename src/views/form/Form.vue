<script>
import { computed, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Footer from '../landing/components/Footer.vue';
import StepOne from './components/StepOne.vue';
import StepTwo from './components/StepTwo.vue';
import StepThree from './components/StepThree.vue';
import StepFour from './components/StepFour.vue';
import FormSend from './components/FormSend.vue';

export default {
  components: {
    Footer,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    FormSend
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const step = computed(() => store.getters.getStep);
    const progress = computed(() => store.getters.getProgress);
    const sendingCode = computed(() => store.getters.getSendingCode);
    const sendingValidate = computed(() => store.getters.getSendingValidate);

    const goToHome = () => {
      router.push('/');
    }
    const nextStep = () => {
      store.commit('nextStep');
    };

    const prevStep = () => {
      store.commit('prevStep');
    };
    const submitForm = () => {
      // Lógica para enviar el formulario
    };

    onBeforeUnmount(() => {
      store.commit('resetState');
    });

    return {
      step,
      progress,
      sendingCode,
      sendingValidate,
      goToHome,
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
      <template #header v-if="!sendingCode && !sendingValidate">
        <img
          src="https://static.wixstatic.com/media/1763b9_e442ddad423247d88c8705d7bdbe2a6e~mv2.png/v1/fill/w_162,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LogotipoAtomic32_Blco.png"
          @click="goToHome" class="custom-pointer" />
      </template>
      <template #content>
        <div class="grid" v-show="!sendingCode && !sendingValidate">
          <div class="col-9 align-content-center mt-8">
            <ProgressBar :showValue="false" :value="progress" v-if="step <= 4"></ProgressBar>
            <div v-show="step === 1">
              <StepOne />
            </div>
            <div v-show="step === 2">
              <StepTwo />
            </div>
            <div v-show="step === 3">
              <StepThree />
            </div>
            <div v-show="step === 4">
              <StepFour />
            </div>
            <div v-show="step === 5">
              <FormSend />
            </div>
          </div>
          <div class="col-3">
            <div class="flex align-items-center justify-content-center mr-6">
              <img src="../../assets/Group 4033.png" alt="" v-if="step === 1">
              <img src="../../assets/Group 4034.png" alt="" v-if="step === 2 || step === 3" class="astronauta">
              <img src="../../assets/Group 4038.png" alt="" v-if="step === 4">
              <img src="../../assets/Group 4039.png" alt="" v-if="step === 5" class="astronauta2">
            </div>
          </div>
        </div>

        <div class="grid" v-if="!sendingCode || !sendingValidate">
          <div class="col-12" v-if="sendingCode" style="display: flex; flex-direction: column; align-items: center;">
            <img src="../../assets/sending-code.png" alt="" class="paper mt-8"><br />
            <p class="text-center" style="margin: 2em 0em 13.5em 0em;">
              <span class="font-bold text-3xl" style="color: white;">
                Te estamos reenviando el código
              </span>
            </p>
          </div>
          <div class="col-12" v-if="sendingValidate" style="display: flex; flex-direction: column; align-items: center;">
            <img src="../../assets/checkmark@2x.png" class="paper mt-8"><br />
            <p class="text-center" style="margin: 2em 0em 13.5em 0em;">
              <span class="font-bold text-3xl" style="color: white;">
                Hemos validado el código
              </span>
            </p>
          </div>
        </div>
      </template>
    </Card>
    <Footer v-show="!sendingCode && !sendingValidate" />
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

.astronauta {
  position: absolute;
  margin-top: 27em;
  margin-left: 0px;
  width: 32%;
}

.astronauta2 {
  position: absolute;
  margin-top: 36em;
  margin-left: -14em;
  width: 37%;
}

.paper {
  width: 13em;
}

.custom-pointer {
  cursor: pointer;
}
</style>
