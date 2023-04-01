<script>
import ButtonForm from './ButtonForm.vue';

export default {
    components: {
        ButtonForm
    },
    setup() {

    }
}
</script>

<template>
    <div>
        <Card class="info">
            <template #header>
                <div class="flex align-items-center justify-content-center">
                    <p class="text-center white-space-nowrap">
                        <span class="font-bold text-7xl" style="color: white;">¡TE ENCANTARÁ </span><br />
                        <span class="font-bold text-7xl" style="color: orangered;"> TRABAJAR CON NOSOTROS!</span><br />
                    </p>
                </div>
            </template>
            <template #content>
                <div class="grid">
                    <div class="col-12 team" />
                    <div class="col-3 ml-7 flex align-items-center justify-content-center">
                        <p><span class="font-bold text-2xl" style="color: white;">Contratación remota</span></p>
                        <i class="pi pi-arrow-right mr-6" style="color: orangered; font-size: 2rem;"></i>
                    </div>
                    <div class="col-3 ml-4 flex align-items-center justify-content-center">
                        <p><span class="font-bold text-2xl" style="color: white;">Entrevista con el área de RH</span></p>
                        <i class="pi pi-arrow-right ml-5" style="color: orangered; font-size: 2rem;"></i>
                    </div>
                    <div class="col-2 ml-6 flex align-items-center justify-content-center">
                        <p><span class="font-bold text-2xl" style="color: white;">Prueba práctica</span></p>
                        <i class="pi pi-arrow-right ml-6" style="color: orangered; font-size: 2rem;"></i>
                    </div>
                    <div class="col-1 ml-7 flex align-items-center justify-content-center">
                        <p><span class="font-bold text-2xl " style="color: white;">Entrevista técnica</span></p>
                    </div>
                </div>
                <ButtonForm />
            </template>
        </Card>
    </div>
</template>

<style scoped>
.team {
    background-image: url('../../../assets/Group 4040.png');
    background-repeat: no-repeat;
    background-position: center;
    height: 25em;
}

.p-card {
    background: transparent;
    margin: 2em;
    box-shadow: none;
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
