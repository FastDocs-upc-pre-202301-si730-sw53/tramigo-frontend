
<template>
    <div class="card relative z-2">
        <Menubar :model="items" class="custom-menubar">
            <template #start>
                <img alt="logo" src="../assets/img/logo-tramigo.png" height="40" class="mr-2" />
            </template>
            <template #end>
                <InputText placeholder="Search" type="text" class="container_search"/>
            </template>
        </Menubar>
    </div>
</template>
    
<script setup>
import { ref } from "vue";
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

if (localStorage.getItem('userID') == null) {
    console.log('error')
}
else console.log('success')

const userID = localStorage.getItem('userID')

const items = ref([
    {
        label: t('menu.home'),
        icon: 'pi pi-fw pi-home',
        items: [
            {
                label: t('menu.profile'),
                icon: 'pi pi-fw pi-user',
                to: `/profile/${userID}`
            },
            {
                label: t('menu.profileEdit'),
                icon: 'pi pi-fw pi-user',
                to: `/profile/edit/${userID}`
            }
        ]
    },
    {
        label: t('menu.procedure'),
        icon: 'pi pi-fw pi-briefcase',
        items: [
            {
                label: t('menu.procedureW'),
                icon: 'pi pi-fw pi-briefcase',
                to: `/procedure/${userID}`
            },
            {
                label: 'Editar Tramites',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Crear Nuevo Tramite',
                        icon: 'pi pi-fw pi-plus',
                        to: '/procedure/new'
                    },
                    {
                        label: 'Eliminar Tramites',
                        icon: 'pi pi-fw pi-minus',
                        to: '/procedure/delete'
                    }
                ]
            },
            {
                label: 'Tramites Archivados',
                icon: 'pi pi-fw pi-folder',
                to: `/procedure/filed/${userID}`,  
            }
        ]
    },
    {
        label: t('menu.payment'),
        icon: 'pi pi-fw pi-credit-card',
        to: `/payment/${userID}`
    },
    // {
    //     label: t('menu.search'),
    //     icon: 'pi pi-fw pi-search',
    //     to: '/search'
    // },
    {
        label: t('menu.exit'),
        icon: 'pi pi-fw pi-power-off',
        to: '/login'
    }
]);
</script>

<script>
export default {
    name: "ToolbarComponent",
}
</script>

<style scoped>
@media only screen and (max-width: 1090px) {
    .container_search {
        width: 150px;
    }

} 

@media only screen and (max-width: 400px) {
    .container_search {
        width: 100px;
    }
} 
</style>
