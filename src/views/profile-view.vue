<template>
    <div class="container">
        <Card class="container_card">
            <template #title> Perfil </template>
            <template #content>
                <p>Foto de perfil: <br>
                    <img src="https://us.123rf.com/450wm/fizkes/fizkes2104/fizkes210400405/167446118-cierra-el-retrato-de-la-pantalla-de-la-cabeza-de-un-joven-cauc%C3%A1sico-sonriente-que-mira-la.jpg?ver=6">
                </p>
                <div>
                    <label for="username">Nombre de usuario</label>
                    <br>
                    <span class="p-float-label">
                        <InputText id="username" v-model="username_" :disabled="true" />
                    </span>
                </div>
                <div>
                    <label for="name">Nombre</label>
                    <br>
                    <span class="p-float-label">
                        <InputText id="name" v-model="name_" :disabled="true"/>
                    </span>
                </div>
                <div>
                    <label for="lastName">Apellido Paterno</label>
                    <br>
                    <span class="p-float-label">
                        <InputText id="lastName" v-model="lastName1_" :disabled="true"/>
                    </span>
                </div>
                <div>
                    <label for="lastName">Apellido Materno</label>
                    <br>
                    <span class="p-float-label">
                        <InputText id="lastName" v-model="lastName2_" :disabled="true"/>
                    </span>
                </div>
                <div>
                    <label for="dni">Dni</label>
                    <br>
                    <span class="p-float-label">
                        <InputText id="dni" v-model="dni_" :disabled="true"/>
                    </span>
                </div>
                <div>
                    <label for="email">Correo</label>
                    <br>
                    <span class="p-float-label">
                        <InputText id="email" v-model="email_" :disabled="true"/>
                    </span>
                </div>
            </template>
            <template #footer>
                <div class="container_footer">
                    <Button label="Editar" icon="pi pi-user-edit" severity="success" @click="editProfile()"/>
                    <Button label="Cambiar Contraseña" icon="pi pi-lock" severity="success"  @click="onDialog(true)"/>
                    <Button label="Borrar Cuenta" icon="pi pi-delete-left" severity="success" @click="eraseProfile()" />
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
                        <InputText type="text" id="password" disabled v-model="password" class="input"/>
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

<script setup>
import { UsersService } from "../services/users.service";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";
import { ref } from "vue";

const API_USER = new UsersService();
const USER_ID = localStorage.getItem('userID');
const router = useRouter();
const toast = useToast();
const password = ref("");
const newPassword = ref("");
const confirmPassword = ref("");
const visible = ref(false);

const username_ = ref("");
const name_ = ref("");
const email_ = ref("");
const lastName1_ = ref("");
const lastName2_ = ref("");
const dni_ = ref("");

API_USER.getUserById(parseInt(USER_ID)).then((response) => {
    username_.value = response.data.username;
    name_.value = response.data.name;
    email_.value = response.data.email;
    lastName1_.value = response.data.lastName1;
    lastName2_.value = response.data.lastName2;
    dni_.value = response.data.dni;
});

const editProfile = () => {
    router.push(`/profile/edit`);
}

const onDialog = (show) => {
    API_USER.getUserById(parseInt(USER_ID)).then((response) => {
        password.value = response.data.password;
    });
    visible.value = show;
}

const eraseProfile = () => {
    API_USER.deleteUser(USER_ID);
    toast.add({ severity: 'success', summary: 'Cuenta eliminada', detail: 'Cuenta eliminada con exito', life: 2000 });
    setTimeout(() => { router.push('/login'); }, 2000);
}

const checkPassword = () => {
    return ((newPassword.value !== "" || confirmPassword.value !== "") ? true : false) && ((newPassword.value === confirmPassword.value) ? true : false);
}

const savePassword = () => {
    if (checkPassword()) {
        toast.add({ severity: 'success', summary: 'Contraseña actualizada', detail: 'Contraseña actualizada con exito', life: 2000 });
        API_USER.updateUser(USER_ID, { password: newPassword.value });
        setTimeout(() => { visible.value = false; }, 2000);
        clearAll();
    }
    else {
        toast.add({ severity: 'warn', summary: 'Contraseña distinta', detail: 'Las contraseñas no coinciden', life: 2000 });
    }
}

const cancelPassword = (show) => {
    newPassword.value = "";
    confirmPassword.value = "";
    visible.value = show;
}

const clearAll = () => {
    newPassword.value = "";
    confirmPassword.value = "";
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