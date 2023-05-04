<script>
    export default {
        name: "NotFoundView",
    }
</script>

<template>
    <div class="container">
        <p>La pagina no fue encontrada, por favor vuelve a ingresar</p>
        <RouterLink to="/login"><Button label="Volver a Inicio de Sesion" severity="danger"/></RouterLink>
        
    </div>
</template>

<style scoped>
    .container {
        width: 80%;
        margin: auto;
    }
</style>