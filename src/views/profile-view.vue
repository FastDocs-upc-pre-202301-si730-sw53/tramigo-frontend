<template>
    <div class="container">
        <Card>
            <template #title> Perfil </template>
            <template #content>
                <p>Foto de perfil: <br><img
                        src="https://us.123rf.com/450wm/fizkes/fizkes2104/fizkes210400405/167446118-cierra-el-retrato-de-la-pantalla-de-la-cabeza-de-un-joven-cauc%C3%A1sico-sonriente-que-mira-la.jpg?ver=6">
                </p>
                <div>
                    <label for="name">Name</label>
                    <br>
                    <span class="p-float-label">
                        <InputText id="name" v-model="username_" />
                    </span>
                </div>
                <div>
                    <label for="username">Nombre</label>
                    <br>
                    <span class="p-float-label">
                        <InputText id="username" v-model="name_" />
                    </span>
                </div>
                <div>
                    <label for="email">Correo</label>
                    <br>
                    <span class="p-float-label">
                        <InputText id="email" v-model="email_" />
                    </span>
                </div>
            </template>
            <template #footer>
                <Button label="Editar" icon="pi pi-user-edit" severity="success" />
                <Button label="Cambiar Contraseña" icon="pi pi-lock" severity="success" />
                <Button label="Borrar Cuenta" icon="pi pi-delete-left" severity="success" />
            </template>
        </Card>
    </div>
</template>

<script>
import { FakeUsersService } from '@/services/fake-user.service'

export default {
    name: 'ProfileComponent',
    data() {
        return {
            username_: '',
            name_: '',
            email_: '',
            fakeUserService: new FakeUsersService(),
        }
    },
    beforeMount(){
        const id = this.$route.params.id
        console.log(this.fakeUserService.getUser(id))
        const user = this.fakeUserService.getUser(id)
        console.log(user)
        this.username_=user.username
        this.name_=user.name
        this.email_=user.email
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