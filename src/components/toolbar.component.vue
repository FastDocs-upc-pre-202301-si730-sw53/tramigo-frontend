<template>
    <p class="font-bold text-4xl">{{title}}</p>
    <pv-tab-menu :model="items" />
</template>

<script setup>
import {ref} from "vue";
const title='tramigo'
const items = ref([
    {
        label: 'home',
        icon: 'pi pi-fw pi-home',
        to: '/'
    },
    {
        label: 'User',
        icon: 'pi pi-fw pi-user',
        to: '/users'
    },
    {

        label: 'Posts',
        icon: 'pi pi-fw pi-table',
        to: '/posts'
    },
    {
        label: 'Documentation',
        icon: 'pi pi-fw pi-file',
        to: '/documentation'
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        to: '/settings'
    }
]);

</script>

<script>
export default {
    name: "ToolbarComponent"
}

</script>

<style scoped>

</style>