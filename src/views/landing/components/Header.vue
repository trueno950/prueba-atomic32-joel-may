<script>
import ButtonForm from "./ButtonForm.vue";
import image1 from "../../../../public/assets/Group 4032.png";

export default {
  components: {
    ButtonForm,
  },
  setup() {
    const goToInfo = () => {
      window.location.href = "#info";
    };
    return {
      goToInfo,
      image1,
    };
  },
};
</script>

<template>
  <div>
    <Card>
      <template #header>
        <img
          alt=""
          src="https://static.wixstatic.com/media/1763b9_e442ddad423247d88c8705d7bdbe2a6e~mv2.png/v1/fill/w_162,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LogotipoAtomic32_Blco.png"
          class="logo"
        />
      </template>
      <template #content>
        <div class="grid mt-3">
          <div class="lg:col-6 sm:col-12 sm:col-12">
            <img :src="image1" class="ml-7 astronauta" />
          </div>
          <div class="lg:col-6 sm:col-12 sm:col-12 align-content-center">
            <div class="flex align-items-center justify-content-center">
              <p class="text-justify">
                <span class="font-bold text-header" style="color: white; font-size: 4.2em"
                  >Desarrolla todo </span
                ><br />
                <span
                  class="font-bold text-header"
                  style="color: orangered; font-size: 4.5em"
                  >tu POTENCIAL </span
                ><br />
                <span class="font-bold text-header" style="color: white; font-size: 3.6em"
                  >dentro del equipo</span
                ><br />
                <span
                  class="font-bold text-header"
                  style="color: orangered; font-size: 4.5em"
                  >ATOMIC</span
                >
                <span class="font-bold text-header" style="color: white; font-size: 4.5em"
                  >LABS</span
                >
              </p>
            </div>
            <ButtonForm />
          </div>
        </div>
      </template>
      <template #footer>
        <div
          class="flex align-items-center justify-content-center"
          @click="goToInfo"
        >
          <Button
            icon="pi pi-chevron-down"
            severity="secondary"
            rounded
            outlined
            aria-label="Filter"
          /><br />
        </div>
        <p class="text-center">
          <a href="#info">
            <span class="font-bold text-1xl" style="color: white"
              >Quiero saber más</span
            >
          </a>
        </p>
      </template>
    </Card>
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

.p-button.p-button-info {
  color: #2d6cf5;
  background: #ffffff;
  width: 14em;
}

.p-button.p-button-secondary.p-button-outlined {
  background-color: white;
}

@media only screen and (max-width: 576px) {
  .text-header{
    font-size: 2em !important;
  }
  .p-card-header img {
    position: absolute;
    margin-top: 10px;
    margin-left: 20px;
    width: 20%;
  }
  .astronauta {
    width: 90%;
  }
  .text-3xl {
    font-size: 0.75rem !important;
  }
  .text-2xl {
    font-size: 0.5rem !important;
  }
}

/* Medium screens (tablets) */
@media only screen and (min-width: 577px) and (max-width: 768px) {
  .p-card-header img {
    position: absolute;
    margin-top: 10px;
    margin-left: 20px;
    width: 20%;
  }
  .astronauta {
    width: 90%;
  }
  .text-3xl {
    font-size: 1.5rem !important;
  }
  .text-2xl {
    font-size: 1rem !important;
  }
}
</style>
