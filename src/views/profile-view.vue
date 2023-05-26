<template>
    <div class="container">
        <Card class="container_card">
            <template #title> Perfil </template>
            <template #content>
                <p>Foto de perfil: <br>
                    <img src="https://us.123rf.com/450wm/fizkes/fizkes2104/fizkes210400405/167446118-cierra-el-retrato-de-la-pantalla-de-la-cabeza-de-un-joven-cauc%C3%A1sico-sonriente-que-mira-la.jpg?ver=6">
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
                <div class="container_footer">
                    <Button label="Editar" icon="pi pi-user-edit" severity="success" />
                    <Button label="Cambiar Contraseña" icon="pi pi-lock" severity="success"  @click="onDialog(true)"/>
                    <Button label="Borrar Cuenta" icon="pi pi-delete-left" severity="success" />
                </div>
            </template>
        </Card>
    </div>

    <div class="card flex justify-content-center">
        <Dialog v-model:visible="visible" modal header="Modificar Contraseña" :style="{ width: '45vw' }" :breakpoints="{ '960px': '65vw', '641px': '95vw' }">
            <div class="container_dialog">
                <div>
                    <div>
                        <label for="password">Contraseña Actual: </label>
                        <InputText type="text" id="password" v-model="password" class="input"/>
                    </div>
                    <div>
                        <label for="newPassword">Nueva Contraseña: </label>
                        <InputText type="password" id="newPassword" v-model="newPassword" class="input"/>
                    </div>
                    <div>
                        <label for="confirmPassword">Confirmar Contraseña: </label>
                        <InputText type="password" id="confirmPassword" v-model="confirmPassword"/>
                    </div>
                    <Toast />
                    <div style="margin-top: 50px; display: flex; justify-content: center;">
                        <Button icon="pi pi-check" label="Guardar" @click="savePassword()"/>
                        <Button icon="pi pi-times" label="Cancelar" severity="danger" @click="cancelPassword(false)"/>
                    </div>
                </div>
            </div>
        </Dialog>
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

<script setup>
import { useToast } from "primevue/usetoast";
import { ref } from "vue";
import { useRoute } from 'vue-router';

const visible = ref(false);
const password = ref("");
const newPassword = ref("");
const confirmPassword = ref("");

const api = new FakeUsersService();
const user = api.getUser(parseInt(useRoute().params.id))
const toast = useToast();

password.value = user.password;

const onDialog = (show) => {
    visible.value = show;
}

const savePassword = () => {
    if (newPassword.value === confirmPassword.value) {
        toast.add({ severity: 'success', summary: 'Contraseña actualizada', detail: 'Contraseña actualizada con exito', life: 2000 });
        setTimeout(() => { visible.value = false; }, 2000);
    }
    else {
        toast.add({ severity: 'warn', summary: 'Contraseña distinta', detail: 'Las contraseñas no coinciden', life: 3000 });
    }
}

const cancelPassword = (show) => {
    newPassword.value = "";
    confirmPassword.value = "";
    visible.value = show;
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

.input {
    width: 245px;
}

Button {
    margin: 5px;
}

.container_dialog {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container_dialog div {
    margin: 25px;
}

@media only screen and (max-width: 550px) {
    .container_footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .container_dialog div {
        text-align: center;
    }

    Button {
        width: 75%;
        margin: 5px;
    }

    .container_card {
        width: 95%;
    }

    img {
        width: 100%;
    }
}
</style>