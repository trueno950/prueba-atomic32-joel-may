<script>
import { computed, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Footer from "../landing/components/Footer.vue";
import StepOne from "./components/StepOne.vue";
import StepTwo from "./components/StepTwo.vue";
import StepThree from "./components/StepThree.vue";
import StepFour from "./components/StepFour.vue";
import FormSend from "./components/FormSend.vue";
import image1 from "../../../public/assets/Group 4033.png";
import image2 from "../../../public/assets/Group 4034.png";
import image3 from "../../../public/assets/Group 4038.png";
import image4 from "../../../public/assets/Group 4039.png";
import image5 from "../../../public/assets/sending-code.png";
import image6 from "../../../public/assets/checkmark@2x.png";

export default {
  components: {
    Footer,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    FormSend,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const step = computed(() => store.getters.getStep);
    const progress = computed(() => store.getters.getProgress);
    const sendingCode = computed(() => store.getters.getSendingCode);
    const sendingValidate = computed(() => store.getters.getSendingValidate);

    const goToHome = () => {
      router.push("/");
    };
    const nextStep = () => {
      store.commit("nextStep");
    };

    const prevStep = () => {
      store.commit("prevStep");
    };
    const submitForm = () => {
      // Lógica para enviar el formulario
    };

    onBeforeUnmount(() => {
      store.commit("resetState");
    });

    return {
      step,
      progress,
      sendingCode,
      sendingValidate,
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      goToHome,
      nextStep,
      prevStep,
      submitForm,
    };
  },
};
</script>

<template>
  <div>
    <Card>
      <template #header v-if="!sendingCode && !sendingValidate">
        <img
          src="https://static.wixstatic.com/media/1763b9_e442ddad423247d88c8705d7bdbe2a6e~mv2.png/v1/fill/w_162,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LogotipoAtomic32_Blco.png"
          @click="goToHome"
          class="custom-pointer"
        />
      </template>
      <template #content>
        <div class="grid" v-show="!sendingCode && !sendingValidate">
          <div class="sm:col-12 lg:col-9 align-content-center mt-7">
            <ProgressBar
              :showValue="false"
              :value="progress"
              v-if="step <= 4"
            ></ProgressBar>
          </div>
          <div class="sm:col-12 lg:col-9 align-content-center">
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
          <div class="sm:col-12 lg:col-3">
            <div class="flex align-items-center justify-content-center mr-6">
              <img :src="image1" alt="" v-if="step === 1" class="astronauta1" />
              <img
                :src="image2"
                alt=""
                v-if="step === 2 || step === 3"
                class="astronauta2"
              />
              <img :src="image3" alt="" v-if="step === 4" class="astronauta3" />
              <img :src="image4" alt="" v-if="step === 5" class="astronauta2" />
            </div>
          </div>
        </div>

        <div class="grid" v-if="!sendingCode || !sendingValidate">
          <div
            class="col-12"
            v-if="sendingCode"
            style="display: flex; flex-direction: column; align-items: center"
          >
            <img :src="image5" alt="" class="paper mt-8" /><br />
            <p class="text-center" style="margin: 2em 0em 13.5em 0em">
              <span class="font-bold text-3xl" style="color: white">
                Te estamos reenviando el código
              </span>
            </p>
          </div>
          <div
            class="col-12"
            v-if="sendingValidate"
            style="display: flex; flex-direction: column; align-items: center"
          >
            <img :src="image6" class="paper mt-8" /><br />
            <p class="text-center" style="margin: 2em 0em 13.5em 0em">
              <span class="font-bold text-3xl" style="color: white">
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
  width: 15%;
}

.p-progressbar-value {
  background: orangered !important;
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

/* Small screens (phones) */
@media only screen and (max-width: 576px) {
  .text-6xl {
    font-size: 1rem !important;
  }
  .astronauta1 {
    position: inherit;
    margin-top: 1em;
    margin-left: 1em;
    width: 4em;
  }
  .astronauta2 {
    position: inherit;
    margin-top: 2em;
    margin-left: 8em;
    width: 2em;
  }
  .astronauta3 {
    position: inherit;
    margin-top: -15em;
    margin-left: 15em;
    width: 3em;
  }
}

/* Medium screens (tablets) */
@media only screen and (min-width: 577px) and (max-width: 768px) {
  .astronauta1 {
    position: inherit;
    margin-top: -25em;
    margin-left: 19em;
    width: 36%;
  }
  .astronauta2 {
    position: inherit;
    margin-top: -25em;
    margin-left: 24em;
    width: 45%;
  }
}

/* Large screens (notebooks) */
@media only screen and (min-width: 769px) and (max-width: 992px) {
  .astronauta1 {
    position: inherit;
    margin-top: -25em;
    margin-left: 18em;
    width: 30%;
  }
  .astronauta2 {
    position: inherit;
    margin-top: -30em;
    margin-left: 28em;
    width: 45%;
  }
}

/* Extra large screens (monitors) */
@media only screen and (min-width: 993px) {
  .astronauta1 {
    position: inherit;
    margin-top: -2em;
    margin-left: 0em;
    width: 140%;
  }
  .astronauta2 {
    position: inherit;
    margin-top: -8em;
    margin-left: -9em;
    width: 185%;
  }
}
</style>
