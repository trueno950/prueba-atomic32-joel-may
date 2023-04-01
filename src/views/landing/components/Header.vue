<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

//const count = ref(0)
const store = useStore();
const count = computed(() => store.getters.getCount);
console.log('store', count.value)
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
          <div class="col-6 astronauta"></div>
          <div class="col-6 align-content-center">
            <div class="flex align-items-center justify-content-center">
              <p class="text-center white-space-nowrap">
                <span class="font-bold text-7xl" style="color: white;">Desarrolla todo </span><br />
                <span class="font-bold text-7xl" style="color: orangered;">tu POTENCIAL </span><br />
                <span class="font-bold text-6xl" style="color: white;">dentro del equipo</span><br />
                <span class="font-bold text-8xl" style="color: orangered; font-size: 4em;">ATOMIC</span>
                <span class="font-bold text-8xl" style="color: white;">LABS</span>
              </p>
            </div>
            <div class="flex align-items-center justify-content-center">
              <Button label="¡Quiero ser parte!" severity="info" rounded class="p-button-lg" />
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex align-items-center justify-content-center">
          <Button icon="pi pi-chevron-down" severity="secondary" rounded outlined aria-label="Filter" /><br />
        </div>
        <p class="text-center">
          <span class="font-bold text-1xl" style="color: white;">Quiero saber más</span>
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
}

.p-button.p-button-secondary.p-button-outlined {
  background-color: white;
}
</style>
