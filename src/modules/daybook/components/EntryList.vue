<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text" class="form-control" placeholder="Buscar entrada">
        </div>
        <div class="entry-scrollable-area mt-3">
            <Entry v-for="item in 100" :key="item" />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

const Entry = defineAsyncComponent(() => import('./Entry.vue'));
export default {
    components: {
        Entry,
    }
}

</script>

<style lang="scss" scoped>
    .entry-list-container {
        border-right: 1px solid #2c3e50;
        height: calc(100vh - 56px);
    }
    .entry-scrollable-area {
        height: calc(100vh - 120px);
        overflow: scroll;
        overflow-x: hidden;
    }
</style>