<script>
import ButtonForm from './ButtonForm.vue';
import image1 from '../../../../public/assets/Group 4040.png'

export default {
    components: {
        ButtonForm
    },
    setup() {
        return{
            image1
        }
    }
}
</script>

<template>
    <div>
        <Card class="info">
            <template #header>
                <div class="grid">
                    <div class="col-12 align-content-center">
                        <div class="flex align-items-center justify-content-center">
                        <p class="text-center">
                            <span class="font-bold text-7xl" style="color: white;">¡TE ENCANTARÁ </span><br />
                            <span class="font-bold text-7xl" style="color: orangered;"> TRABAJAR CON NOSOTROS!</span><br />
                        </p>
                    </div>
                    </div>
                </div>
            </template>
            <template #content>
                <div class="grid ml-5">
                    <div class="col-12" >
                        <img :src="image1" alt="" style="width: 90%;">
                    </div>
                    <div class="sm:col-6 md:col-4 lg:col-3 flex align-items-center justify-content-center">
                        <p><span class="font-bold text-2xl" style="color: white;">Contratación remota</span></p>
                        <i class="pi pi-arrow-right mr-6" style="color: orangered; font-size: 2rem;"></i>
                    </div>
                    <div class="sm:col-6 md:col-4 lg:col-3 flex align-items-center justify-content-center">
                        <p><span class="font-bold text-2xl" style="color: white;">Entrevista con el área de RH</span></p>
                        <i class="pi pi-arrow-right ml-5" style="color: orangered; font-size: 2rem;"></i>
                    </div>
                    <div class="sm:col-6 md:col-4 lg:col-3 flex align-items-center justify-content-center">
                        <p><span class="font-bold text-2xl" style="color: white;">Prueba práctica</span></p>
                        <i class="pi pi-arrow-right ml-6" style="color: orangered; font-size: 2rem;"></i>
                    </div>
                    <div class="sm:col-6 md:col-4 lg:col-3 flex align-items-center justify-content-center">
                        <p><span class="font-bold text-2xl " style="color: white;">Entrevista técnica</span></p>
                    </div>
                </div>
                <ButtonForm />
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

.p-button.p-button-info {
    color: #2d6cf5;
    background: #ffffff;
    width: 14em;
}

.p-button.p-button-secondary.p-button-outlined {
    background-color: white;
}
</style>
