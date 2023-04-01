<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const checkTerms = ref(false);
        const visible = ref(false);

        const disabledButton = computed(() => {
            if (checkTerms.value) {
                return false;
            } else {
                return true;
            }
        });

        const prevStep = () => {
            store.commit('prevStep');
        };

        const nextStep = () => {
            store.commit('nextStep');
        };

        return {
            prevStep,
            nextStep,
            visible,
            checkTerms,
            disabledButton
        };
    }
};
</script>

<template>
    <div>
        <p @click="prevStep" class="custom-text">
            <i class="pi pi-chevron-left px-2" style="color: white"></i>
            <span class="font-bold text-1xl" style="color: white;">Regresar</span>
        </p>
    </div>
    <div class="flex align-items-center justify-content-start mt-5">
        <img src="../../../assets/Group 4025@2x.png" class="mr-3">
        <p class="text-left white-space-nowrap">
            <span class="font-bold text-6xl" style="color: white;">TÉRMINOS Y </span>
            <span class="font-bold text-6xl" style="color: orangered;">CONDICIONES</span>
        </p>
    </div>
    <div class="flex align-items-center justify-content-start mt-2">
        <p class="text-left white-space-nowrap">
            <span class="font-bold text-2xl" style="color: white;">
                Por favor revisa nuestros términos y condiciones para este servicio:
            </span>
        </p>
    </div>
    <div class="flex align-items-center justify-content-start mb-2">
        <p class="text-left white-space-nowrap">
            <span @click="visible = true" class="font-bold text-1xl underline custom-text" style="color: white;">
                Consulta Términos y Condiciones
            </span>
        </p>
    </div>
    <div class="flex align-items-center justify-content-start mb-2">
        <div class="card flex justify-content-center">
            <div class="flex flex-column align-items-center gap-2 mr-3">
                <Checkbox v-model="checkTerms" :binary="true" />
            </div>
        </div>
        <p class="text-left white-space-nowrap">
            <span class="font-semibold text-0xl" style="color: white;">
                Acepto los Términos y Condiciones
            </span>
        </p>
    </div>
    <div class="flex align-items-center justify-content-end mr-8">
        <Button :disabled="disabledButton" @click="nextStep" class="mr-8">Enviar</Button>
    </div>

    <Dialog v-model:visible="visible" modal :style="{ width: '50vw' }" :draggable="false">
        <div class="flex align-items-center justify-content-center">
            <div class="text-center">
                <img src="../../../assets/Group 4029.png" alt="">
                <p class="text-center">
                    <span class="font-bold text-1xl">Términos y Condiciones</span>
                </p>
            </div>
        </div>
        <p class="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
        </p>
        <p class="mb-5">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid
            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <p class="mb-5">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
            culpa
            qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
            quod
            maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
            molestiae
            non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
        </p>
        <p class="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
        </p>
        <p class="mb-5">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid
            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <p class="mb-5">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
            culpa
            qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
            quod
            maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
            molestiae
            non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
        </p>
    </Dialog>
</template>

<style scoped>
.p-input-icon-right {
    display: grid
}

.custom-text {
    cursor: pointer;
}

.p-button {
    color: #ffffff;
    background: orangered;
    border: 1px solid orangered;
    padding: 0.5rem 3.75rem;
    font-size: 1rem;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    border-radius: 20px;
}
</style>
