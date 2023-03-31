<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <div>
        <Card class="section-question">
            <template #header>
                <div class="flex align-items-center justify-content-center title-section">
                    <p class="text-center white-space-nowrap">
                        <span class="font-bold text-7xl" style="color: white;">¿POR QUÉ </span>
                        <span class="font-bold text-7xl" style="color: orangered;"> ATOMIC?</span><br />
                    </p>
                </div>
            </template>
            <template #content>
                <div class="grid content-section">
                    <div class="col-4 align-items-center justify-content-center">
                        <img src="../assets/Group 4041.png" alt="Mi imagen" class="image-card">
                        <div class="container">
                            <img src="../assets/ic_check_tiny.png" alt="Mi imagen" class="image">
                            <p class="text">
                                <span class="text font-bold text-1xl" style="color: white;">
                                    Usamos las tecnologías más modernas.
                                </span>
                            </p>
                        </div>
                        <div class="container mt-3">
                            <img src="../assets/ic_check_tiny.png" alt="Mi imagen" class="image">
                            <p class="text">
                                <span class="text font-bold text-1xl" style="color: white;">
                                    Innovamos y creamos proyectos retadores.
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="col-4 align-items-center justify-content-center">
                        <img src="../assets/Group 4042.png" alt="" class="image-card">
                        <div class="container">
                            <img src="../assets/ic_check_tiny.png" alt="Mi imagen" class="image">
                            <p class="text">
                                <span class="text font-bold text-1xl" style="color: white;">
                                    ¡Trabajamos en equipo rumbo al éxito!
                                </span>
                            </p>
                        </div>
                        <div class="container mt-3">
                            <img src="../assets/ic_check_tiny.png" alt="Mi imagen" class="image">
                            <p class="text">
                                <span class="text font-bold text-1xl" style="color: white;">
                                    No tenemos código de vestimenta.
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="col-4 align-items-center justify-content-center">
                        <img src="../assets/Group 4043.png" alt="" class="image-card">
                        <div class="container">
                            <img src="../assets/ic_check_tiny.png" alt="Mi imagen" class="image">
                            <p class="text">
                                <span class="text font-bold text-1xl" style="color: white;">
                                    Realizamos actividades para tu bienestar.
                                </span>
                            </p>
                        </div>
                        <div class="container mt-3">
                            <img src="../assets/ic_check_tiny.png" alt="Mi imagen" class="image">
                            <p class="text">
                                <span class="text font-bold text-1xl" style="color: white;">
                                    ¡Tenemos un parque frente a la oficina!.
                                </span>
                            </p>
                        </div>
                    </div>

                    <div class="col-12">
                        <Card class="tabla-container">
                            <template #content>
                                <table>
                                    <tr>
                                        <td>Columna 1</td>
                                        <td>Columna 2</td>
                                        <td>Columna 3</td>
                                    </tr>
                                    <tr>
                                        <td>Fila 1, Celda 1</td>
                                        <td>Fila 1, Celda 2</td>
                                        <td>Fila 1, Celda 3</td>
                                    </tr>
                                    <tr>
                                        <td>Fila 2, Celda 1</td>
                                        <td>Fila 2, Celda 2</td>
                                        <td>Fila 2, Celda 3</td>
                                    </tr>
                                    <tr>
                                        <td>Fila 3, Celda 1</td>
                                        <td>Fila 3, Celda 2</td>
                                        <td>Fila 3, Celda 3</td>
                                    </tr>
                                </table>
                            </template>
                        </Card>
                    </div>
                </div>
                <div class="flex align-items-center justify-content-center mt-5">
                    <Button label="¡Quiero ser parte!" severity="info" rounded class="p-button-lg" />
                </div>
            </template>
        </Card>
    </div>
</template>

<style scoped>
.section-question {
    margin-top: 22em
}

.content-section {
    position: relative;
    margin-top: -12em;
    margin-left: 4em;
    margin-right: 4em;
}

.p-card {
    background: #114c97;
    box-shadow: none;
    border-top-left-radius: 10em;
    border-top-right-radius: 10em;
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
    padding: 10px;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    border: 1px solid black;
    padding: 5px;
}

td {
    border: 1px solid rgba(0, 0, 0, 0);
    border-top: 1px solid rgba(0, 0, 0, 0.192);
    border-bottom: 1px solid rgba(0, 0, 0, 0.192);
    border-left: 1px solid rgba(0, 0, 0, 0.192);
    border-right: 1px solid rgba(0, 0, 0, 0.192);
    padding: 8px;
}

td:last-child {
    background-color: #c3e6cb;
}

td:nth-child(1),
td:nth-child(2) {
    background-color: #ffffff;
}

tr:last-child td {
    border-bottom: none;
}

tr:not(:last-child) td:last-child {
    border-right: none;
}
</style>
