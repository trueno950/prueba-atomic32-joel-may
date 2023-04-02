<script>
import image1 from "../../../../public/assets/Group 4035.png";
import image2 from "../../../../public/assets/Group 4036.png";
import image3 from "../../../../public/assets/Group 4037.png";

export default {
  setup() {
    return {
      image1,
      image2,
      image3,
    };
  },
};
</script>

<template>
  <div id="info">
    <Card class="info">
      <template #header>
        <div class="grid">
          <div class="col-12 align-content-center">
            <div class="flex align-items-center justify-content-center">
              <p class="text-center">
                <span class="font-bold text-7xl" style="color: white"
                  >SOMOS EL BRAZO DERECHO </span
                ><br />
                <span class="font-bold text-7xl" style="color: orangered"
                  >DE LA TECNOLOGÍA </span
                ><br />
              </p>
            </div>
          </div>
        </div>
      </template>
      <template #content>
        <div class="cards-container mt-3">
          <div class="card-info card-left">
            <Card>
              <template #title>
                <div class="flex align-items-center justify-content-center">
                  <img alt="user header" :src="image1" />
                </div>
                <p class="text-center">
                  <span class="font-bold text-3xl" style="color: orangered"
                    >- - -</span
                  >
                </p>
                <p class="text-center">
                  <span class="font-bold text-3xl" style="color: orangered"
                    >EXPLORA</span
                  >
                </p>
              </template>
              <template #content>
                <ul class="lista">
                  <li>
                    <p>
                      <span class="text-2xl" style="color: black"
                        >Innovación y
                      </span>
                      <span class="font-bold text-2xl" style="color: black"
                        >creación tecnológica</span
                      >
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="font-bold text-2xl" style="color: black"
                        >UI/UX</span
                      >
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="font-bold text-2xl" style="color: black"
                        >Innovación</span
                      >
                    </p>
                  </li>
                </ul>
              </template>
            </Card>
          </div>
          <div class="card-info card-center">
            <Card style="background-color: orangered">
              <template #title>
                <div class="flex align-items-center justify-content-center">
                  <img alt="user header" :src="image2" />
                </div>
                <p class="text-center">
                  <span class="font-bold text-3xl" style="color: white"
                    >- - -</span
                  >
                </p>
                <p class="text-center">
                  <span class="font-bold text-3xl" style="color: white"
                    >IMAGINA</span
                  >
                </p>
              </template>
              <template #content>
                <ul class="lista">
                  <li>
                    <p>
                      <span class="font-bold text-2xl" style="color: white"
                        >Estrategia
                      </span>
                      <span class="text-2xl" style="color: white">Digital</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="text-2xl" style="color: white"
                        >Big Data &
                      </span>
                      <span class="text-2xl" style="color: white"
                        >Analysis</span
                      >
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="font-bold text-2xl" style="color: white"
                        >Consultoría</span
                      >
                      <span class="text-2xl" style="color: white">
                        Tecnológica</span
                      >
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="font-bold text-2xl" style="color: white"
                        >Reducción</span
                      >
                      <span class="text-2xl" style="color: white">
                        de costos TI</span
                      >
                    </p>
                  </li>
                </ul>
              </template>
            </Card>
          </div>
          <div class="card-info card-right">
            <Card>
              <template #title>
                <div class="flex align-items-center justify-content-center">
                  <img alt="user header" :src="image3" />
                </div>
                <p class="text-center">
                  <span class="font-bold text-3xl" style="color: orangered"
                    >- - -</span
                  >
                </p>
                <p class="text-center">
                  <span class="font-bold text-3xl" style="color: orangered"
                    >CONQUISTA</span
                  >
                </p>
              </template>
              <template #content>
                <ul class="lista">
                  <li>
                    <p>
                      <span class="text-2xl" style="color: black"
                        >Desarrollo tecnológico</span
                      >
                      <span class="font-bold text-2xl" style="color: black">
                        a la medida</span
                      >
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="font-bold text-2xl" style="color: black"
                        >Ciberseguridad</span
                      >
                    </p>
                  </li>
                  <li>
                    <p>
                      <span class="font-bold text-2xl" style="color: black"
                        >Servicios de la nube</span
                      >
                    </p>
                  </li>
                </ul>
              </template>
            </Card>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.info {
  background: transparent;
  margin: 2em;
  box-shadow: none;
}

.p-card {
  background: transparent;
  box-shadow: none;
}

p {
  margin-top: 0px;
  margin-bottom: 0px;
}

.cards-container {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.card-info {
  width: calc((100% / 3) - 20px);
  /* Ajusta el ancho de las tarjetas para que haya espacio entre ellas */
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
}

.card-center {
  position: absolute;
  top: -40px;
  /* Ajusta el valor de top para que la tarjeta central sobresalga de las otras */
  left: 26%;
  /* Centra la tarjeta central */
  width: 45%;
  /* Ajusta el ancho de la tarjeta central para que sea más grande que las otras */
  z-index: 1;
  /* Coloca la tarjeta central por encima de las otras */
}

@media only screen and (max-width: 576px) {
  .card-center {
    position: absolute;
    top: 2px;
    left: 27%;
    width: 45%;
    z-index: 1;
  }
  .text-3xl {
    font-size: 0.75rem !important;
  }
  .text-2xl {
    font-size: 0.5rem !important;
  }
  .text-7xl {
    font-size: 1.5rem !important;
  }
}

/* Medium screens (tablets) */
@media only screen and (min-width: 577px) and (max-width: 768px) {
  .card-center {
    position: absolute;
    top: -25px;
    left: 27%;
    width: 45%;
    z-index: 1;
  }
  .text-3xl {
    font-size: 1.5rem !important;
  }
  .text-2xl {
    font-size: 1rem !important;
  }
}
</style>
