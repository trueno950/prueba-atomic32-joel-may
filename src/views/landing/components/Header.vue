<script>
import ButtonForm from './ButtonForm.vue';

export default {
  components: {
    ButtonForm
  },
  setup() {
    const goToInfo = () =>{
      window.location.href = '#info';
    }
    return {
      goToInfo
    }
  }
}
</script>

<template>
  <div>
    <Card>
      <template #header>
        <img alt=""
          src="https://static.wixstatic.com/media/1763b9_e442ddad423247d88c8705d7bdbe2a6e~mv2.png/v1/fill/w_162,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LogotipoAtomic32_Blco.png" />
      </template>
      <template #content>
        <div class="grid mt-3">
          <div class="col-6">
            <img src="../../../assets/Group 4032.png" class="ml-7">
          </div>
          <div class="col-6 align-content-center">
            <div class="flex align-items-center justify-content-center">
              <p class="text-justify">
                <span class="font-bold" style="color: white; font-size: 4.2em;">Desarrolla todo </span><br />
                <span class="font-bold" style="color: orangered; font-size: 4.5em;">tu POTENCIAL </span><br />
                <span class="font-bold" style="color: white; font-size: 3.6em;">dentro del equipo</span><br />
                <span class="font-bold" style="color: orangered; font-size: 4.5em;">ATOMIC</span>
                <span class="font-bold" style="color: white; font-size: 4.5em;">LABS</span>
              </p>
            </div>
            <ButtonForm />
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex align-items-center justify-content-center" @click="goToInfo">
          <Button icon="pi pi-chevron-down" severity="secondary" rounded outlined aria-label="Filter" /><br />
        </div>
        <p class="text-center">
          <a href="#info">
            <span class="font-bold text-1xl" style="color: white;">Quiero saber más</span>
          </a></p>
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
  width: 10%;
}

.astronauta {
  background-image: url('../../../assets/Group 4032.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.p-button.p-button-info {
  color: #2d6cf5;
  background: #ffffff;
  width: 14em;
}

.p-button.p-button-secondary.p-button-outlined {
  background-color: white;
}
</style>
