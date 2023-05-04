<template>
    <div class="container">
        <h1>Mis Tramites</h1>
        <Card>
        <template #title> Solicitud de Servicio </template>
        <template #content>
            <h2>Se pidio servicio de internet</h2>
        </template>
        <template #footer>
            <Button label="En Proceso" icon="pi-spinner" severity="warning"/>
            <Button label="Info" icon="pi-info-circle" severity="info"/>
        </template>
        </Card>
    </div>
</template>

<script>
  export default{
    name: 'ProcedureComponent',
    data() {
        return {
            value: ''
        }
    }
  }
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.p-card{
   background-color:  #A3D9A5;
}
</style>