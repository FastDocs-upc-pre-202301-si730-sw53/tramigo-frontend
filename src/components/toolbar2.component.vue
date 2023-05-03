<template>
    <div>
        <Toolbar>
            <template #start>
                <img src="../../src/assets/logo.png">
            </template>
            <template #center>
                <Button label="Inicio" icon="pi pi-home" severity="success"/>
                <Button label="Mis Trámites" icon="pi pi-briefcase" severity="success"/>
                <Button label="Buscar Local" icon="pi pi-search" severity="success"/>
                <Button label="Medios de Pago" icon="pi pi-wallet" severity="success"/>
            </template>
            <template #end>
                <Button icon="pi pi-power-off" severity="danger"/>
            </template>
        </Toolbar>
    </div>
</template>

<script>
  export default{
    name: 'Toolbar2',
  }
</script>

<style scoped>
 .p-toolbar {
    background-color: #004B2B;
  }
</style>