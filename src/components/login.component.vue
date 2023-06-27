<template>
    <div class="card flex flex-column align-items-center">
        <img src="../assets/img/logo-tramigo.png" alt="logo">
        <p class="text-3xl font-medium text-900">Bienvenido a tramigo</p>
        <div class="flex flex-column md:flex-row">
            <div class="w-full md:w-5 flex flex-column align-items-left justify-content-center gap-3 py-5">
                <div class="flex align-items-center gap-2">
                    <label for="username">Usuario:</label>
                    <InputText id="username" type="text" class="w-full" v-model="username" />
                </div>
                <div class="flex align-items-center gap-2">
                    <label for="password">Contraseña:</label>
                    <InputText id="password" type="password" class="w-full" v-model="password" />
                </div>
                <Toast></Toast>
                <Toast position="bottom-right" group="br" />
                <div class="bt">
                    <Button label="Login" icon="pi pi-user" class="w-10rem" @click="login"></Button>
                </div>
            </div>
            <div class="w-full md:w-2">
                <Divider layout="vertical" class="hidden md:flex"><b>OR</b></Divider>
                <Divider layout="horizontal" class="flex md:hidden" align="center"><b>OR</b></Divider>
            </div>
            <div class="w-full md:w-5 flex align-items-center justify-content-center py-5">
                <RouterLink to="/register">
                    <Button label="Registrate" icon="pi pi-user-plus" severity="success" class="w-10rem"></Button>
                </RouterLink>
            </div>
        </div>
        <RouterLink to="/home">
            <Button label="Regresa al inicio" icon="pi pi-user-plus" severity="info" class="w-12rem mt-4"></Button>
        </RouterLink>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { UsersService } from '../services/users.service';
import { useRouter } from 'vue-router';
import { useToast } from "primevue/usetoast";

const router = useRouter();
const API_USER = new UsersService();
const toast = useToast();
const username = ref('');
const password = ref('');
let isLoggedIn = false;
let numID = 0;

const login = () => {
    if (checkUser()) {
        API_USER.getAllUser().then((response) => {
            const usuario = response.data.find((user) => user.username === username.value && user.password === password.value);
            if (usuario) {
                isLoggedIn = true;
                numID = usuario.id;
            }
            if (isLoggedIn) {
                toast.add({ severity: 'success', summary: 'Inicio de sesión exitoso', detail: '¡Bienvenido!', group: 'br', life: 2000 });
                localStorage.setItem('userID', numID);
                setTimeout(() => { router.push(`/profile`); }, 2000);
            }
            else {
                toast.add({ severity: 'error', summary: 'Error de inicio de sesión', detail: 'Credenciales inválidas', life: 2000 });
            }
        })
    }
    else {
        toast.add({ severity: 'warn', summary: 'Error de inicio de sesión', detail: 'Por favor, ingresa el nombre de usuario y la contraseña', life: 2000 });
    }
}

const checkUser = () => {
    return ((username.value !== "" || password.value !== "") ? true : false);
}
</script>

<style scoped>
    .bt {
        display: flex;
        justify-content: center;
    }
</style>
