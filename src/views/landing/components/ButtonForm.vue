<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const goToForm = () => {
            router.push('/form');
        }

        return {
            goToForm
        }
    }
}
</script>

<template>
    <div class="flex align-items-center justify-content-center mt-5">
        <Button label="¡Quiero ser parte!" severity="info" rounded class="p-button-lg" @click="goToForm" />
    </div>
</template>

<style scoped>
.p-button.p-button-info {
    color: #2d6cf5;
    background: #ffffff;
    width: 14em;
}
</style>
