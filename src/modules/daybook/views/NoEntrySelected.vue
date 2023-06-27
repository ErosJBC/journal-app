<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hay seleccionado</h1>
    </div>
    <Fab @on:click="createNewEntry" />
</template>

<script>
import { defineAsyncComponent } from 'vue'

const Fab = defineAsyncComponent(() => import('@/modules/daybook/components/Fab.vue'));
export default {
    components: {
        Fab,
    },
    methods: {
        createNewEntry() {
            this.$router.push({ name: 'entry', params: { id: 'new'} });
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    height: 100%;
}
</style>