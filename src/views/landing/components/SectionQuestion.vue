<script>
import ButtonForm from "./ButtonForm.vue";
import image1 from "../../../../public/assets/ic_check_tiny.png";
import image2 from "../../../../public/assets/Group 4041.png";
import image3 from "../../../../public/assets/Group 4042.png";
import image4 from "../../../../public/assets/Group 4043.png";

export default {
  components: {
    ButtonForm,
  },
  setup() {
    return {
      image1,
      image2,
      image3,
      image4,
    };
  },
};
</script>

<template>
  <div>
    <Card class="section-question">
      <template #header>
        <div class="grid">
          <div class="col-12 align-content-center">
            <div
              class="flex align-items-center justify-content-center title-section"
            >
              <p class="text-cente">
                <span class="font-bold text-7xl" style="color: white"
                  >¿POR QUÉ
                </span>
                <span class="font-bold text-7xl" style="color: orangered">
                  ATOMIC?</span
                ><br />
              </p>
            </div>
          </div>
        </div>
      </template>
      <template #content>
        <div class="grid content-section">
          <div
            class="sm:col-12 md:col-6 lg:col-4 align-items-center justify-content-center"
          >
            <img :src="image2" alt="" class="image-card" />
            <div class="container">
              <img :src="image1" alt="Mi imagen" class="image" />
              <p class="text">
                <span class="text font-bold text-1xl" style="color: white">
                  Usamos las tecnologías más modernas.
                </span>
              </p>
            </div>
            <div class="container mt-3">
              <img :src="image1" alt="Mi imagen" class="image" />
              <p class="text">
                <span class="text font-bold text-1xl" style="color: white">
                  Innovamos y creamos proyectos retadores.
                </span>
              </p>
            </div>
          </div>
          <div
            class="sm:col-12 md:col-6 lg:col-4 align-items-center justify-content-center"
          >
            <img :src="image3" alt="" class="image-card" />
            <div class="container">
              <img :src="image1" alt="Mi imagen" class="image" />
              <p class="text">
                <span class="text font-bold text-1xl" style="color: white">
                  ¡Trabajamos en equipo rumbo al éxito!
                </span>
              </p>
            </div>
            <div class="container mt-3">
              <img :src="image1" alt="Mi imagen" class="image" />
              <p class="text">
                <span class="text font-bold text-1xl" style="color: white">
                  No tenemos código de vestimenta.
                </span>
              </p>
            </div>
          </div>
          <div
            class="sm:col-12 md:col-6 lg:col-4 align-items-center justify-content-center"
          >
            <img :src="image4" alt="" class="image-card" />
            <div class="container">
              <img :src="image1" alt="Mi imagen" class="image" />
              <p class="text">
                <span class="text font-bold text-1xl" style="color: white">
                  Realizamos actividades para tu bienestar.
                </span>
              </p>
            </div>
            <div class="container mt-3">
              <img :src="image1" alt="Mi imagen" class="image" />
              <p class="text">
                <span class="text font-bold text-1xl" style="color: white">
                  ¡Tenemos un parque frente a la oficina!.
                </span>
              </p>
            </div>
          </div>

          <div class="col-12">
            <Card>
              <template #content>
                <div class="tabla-container">
                  <table>
                    <col width="500" />
                    <col />
                    <col />
                    <tr>
                      <td>
                        <p class="text-left">
                          <span class="font-bold text-1xl" style="color: black">
                            CARACTERÍSTICAS
                          </span>
                        </p>
                      </td>
                      <td>
                        <p class="text-center">
                          <span class="font-bold text-1xl" style="color: black">
                            OTROS
                          </span>
                        </p>
                      </td>
                      <td>
                        <p class="text-center">
                          <span class="font-bold text-2xl" style="color: black">
                            ATOMIC
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p class="text-left">
                          <span class="text-1xl" style="color: black">
                            Equipo inclusivo, honesto y auténtico
                          </span>
                        </p>
                      </td>
                      <td class="text-center">
                        <img alt="" :src="image1" />
                      </td>
                      <td class="text-center">
                        <img alt="" :src="image1" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p class="text-left">
                          <span class="text-1xl" style="color: black">
                            Puntualidad es nuestro segundo nombre
                          </span>
                        </p>
                      </td>
                      <td class="text-center">
                        <img alt="" :src="image1" />
                      </td>
                      <td class="text-center">
                        <img alt="" :src="image1" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p class="text-left">
                          <span class="text-1xl" style="color: black">
                            Siempre innovamos en nuestros productos
                          </span>
                        </p>
                      </td>
                      <td class="text-center">
                        <img alt="" :src="image1" />
                      </td>
                      <td class="text-center">
                        <img alt="" :src="image1" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p class="text-left">
                          <span class="text-1xl" style="color: black">
                            Te ayudaremos a crecer e implementar nuevos
                            conocimientos
                          </span>
                        </p>
                      </td>
                      <td></td>
                      <td class="text-center">
                        <img alt="" :src="image1" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p class="text-left">
                          <span class="text-1xl" style="color: black">
                            Nos preocupamos por tu bienestar
                          </span>
                        </p>
                      </td>
                      <td></td>
                      <td class="text-center">
                        <img alt="" :src="image1" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p class="text-left">
                          <span class="text-1xl" style="color: black">
                            El respeto es una parte fundamental
                          </span>
                        </p>
                      </td>
                      <td></td>
                      <td class="text-center">
                        <img alt="" :src="image1" />
                      </td>
                    </tr>
                  </table>
                </div>
              </template>
            </Card>
          </div>
        </div>
        <ButtonForm />
      </template>
    </Card>
  </div>
</template>

<style scoped>
.grid {
  margin: 0;
}

.section-question {
  margin-top: 22em;
}

.content-section {
  position: relative;
  margin-top: -12em;
  margin-left: 4em;
  margin-right: 4em;
  margin: 0px;
}

.p-card {
  background: #114c97;
  box-shadow: none;
  border-top-left-radius: 10em;
  border-top-right-radius: 10em;
}

.p-button.p-button-info {
  color: #2d6cf5;
  background: #ffffff;
  width: 14em;
}

.title-section {
  position: absolute;
  margin-top: -20em;
  margin-left: 28%;
}

.container {
  display: inline-block;
}

.image {
  display: inline-block;
  vertical-align: middle;
  max-height: 80em;
  max-width: 100%;
  margin-right: 10px;
}

.image-card {
  height: 20em;
  margin-bottom: 1em;
}

.text {
  display: inline-block;
  vertical-align: middle;
  margin: 0;
}

.tabla-container {
  border-radius: 10px;
  padding: 1.2em;
  background-color: white;
}

table {
  border-collapse: collapse;
  width: 100%;
}

td {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0px;
}

td:last-child {
  background-color: #c3e6cb;
}

td:nth-child(1),
td:nth-child(2) {
  background-color: #ffffff;
}

tr:first-child td {
  border-bottom: none;
  border-top: none;
}

td:nth-child(1),
td:nth-child(2),
td:nth-child(3) {
  border-top: none;
}

td:first-child {
  border-left: none !important;
  border-right: none !important;
}

td:last-child {
  border-right: none;
}

tr:last-child td {
  border-bottom: none;
}

@media only screen and (max-width: 576px) {
  .text-7xl {
    font-size: 1.5rem !important;
  }

  .p-card .p-card-content {
    padding: 0.5rem !important;
  }

  .title-section {
    position: absolute;
    margin-top: -15em;
    margin-left: 20%;
  }
}
</style>
