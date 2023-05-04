<template>
    
    <div class="container">
        <Card>
        <template #title> Perfil </template>
        <template #content>
            <p>Foto de perfil: <br><img src="https://us.123rf.com/450wm/fizkes/fizkes2104/fizkes210400405/167446118-cierra-el-retrato-de-la-pantalla-de-la-cabeza-de-un-joven-cauc%C3%A1sico-sonriente-que-mira-la.jpg?ver=6"></p>
            <div>
                <label for="name">Name</label>
                <br>
                <span class="p-float-label">
                    <InputText id="name" v-model="value"/>
                    <label for="name">Name</label>
                </span>
            </div>
            <div>
                <label for="username">Nombre de Usuario</label>
                <br>
                <span class="p-float-label">
                    <InputText id="username" v-model="value"/>
                    <label for="username">Nombre de Usuario</label>
                </span>
            </div>
            <div>
                <label for="email">Correo</label>
                <br>
                <span class="p-float-label">
                    <InputText id="email" v-model="value"/>
                    <label for="email">Correo</label>
                </span>
            </div>
        </template>
        <template #footer>
            <Button label="Editar" icon="pi pi-user-edit" severity="success"/>
            <Button label="Cambiar Contraseña" icon="pi pi-lock" severity="success"/>
            <Button label="Borrar Cuenta" icon="pi pi-delete-left" severity="success"/>
        </template>
        </Card>
    </div>
</template>

<script>
  export default{
    name: 'ProfileComponent',
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
.p-inputtext {
    background-color: #A3D9A5;
}
</style>