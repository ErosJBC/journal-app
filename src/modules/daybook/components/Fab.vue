<template>
    <button class="btn btn-primary">
        <i class="fa fa-2x" :class="icon" @click="$emit('on:click')"></i>
    </button>
</template>

<script>
export default {
    name: 'FabFloat',
    props: {
        icon: {
            type: String,
            default: 'fa-plus'
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 65px;
    height: 65px;
    border-radius: 100%;
}
</style>