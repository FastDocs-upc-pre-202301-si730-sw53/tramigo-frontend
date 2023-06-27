<script>
import { ref } from 'vue';
import { UsersService } from '@/services/users.service'
import { FakeUsersService } from '@/services/fake-user.service'

export default {
    name: 'RegisterComponent',
    data() {
        return {
            username: '',
            password: '',
            name_: '',
            email: '',
            dni: '',
            lastName1: '',
            lastName2: '',
            phone: '',
            verified: true,
            paymentMethod: '',
            company: '',
            isActive: true,
            procedures: [],
            payments: [],
            user:undefined,
            userService: new UsersService(),
            fakeUserService: new FakeUsersService()
        }
    },
    methods: {
        registerUser() {
            this.user = {
                name: name_.value,
                DNI: dni.value,
                username: username.value,
                email: email.value,
                password: password.value,
                lastName1: this.lastName1,
                lastName2: this.lastName2,
                phone: this.phone,
                verified: this.verified,
                paymentMethod: this.paymentMethod,
                company: this.company,
                isActive: this.isActive,
                procedures: this.procedures,
                payments: this.payments
            }
            this.userService.createUser(this.user);
            this.$router.push('/login');
        },
        goLogin(){
            this.$router.push('/login')
        }
    }
}
</script>


<template>
    <div class="card w-9 m-auto flex flex-column">
        <img class="mx-auto" src="../assets/img/logo-tramigo.png" alt="logo">
        <p class="text-3xl font-medium text-900">Registrate en tramigo</p>

        <div class="flex flex-wrap align-items-center mb-2 gap-2">
            <label for="username" class="p-sr-only">Nombre de usuario:</label>
            <InputText id="username" placeholder="Username" class="p-invalid" v-model.trim="username" />
            <InlineMessage v-if="!username">El nombre de usuario es obligatorio!</InlineMessage>
        </div>

        <div class="flex flex-wrap align-items-center mb-2 gap-2">
            <label for="password" class="p-sr-only">Contraseña:</label>
            <InputText id="password" placeholder="Password" class="p-invalid" v-model.trim="password" />
            <InlineMessage v-if="!password">La contraseña es obligatoria!</InlineMessage>
        </div>

        <div class="flex flex-wrap align-items-center mb-2 gap-2">
            <label for="name_" class="p-sr-only">Nombre:</label>
            <InputText id="name_" placeholder="Name" class="p-invalid" v-model.trim="name_" />
            <InlineMessage v-if="!name_">El nombre es obligatorio!</InlineMessage>
        </div>

        <div class="flex flex-wrap align-items-center mb-2 gap-2">
            <label for="email" class="p-sr-only">Email</label>
            <InputText id="email" placeholder="Email" class="p-invalid" v-model.trim="email" />
            <InlineMessage v-if="!email">El email es obligatorio!</InlineMessage>
        </div>

        <div class="flex flex-wrap align-items-center mb-2 gap-2">
            <label for="dni" class="p-sr-only">DNI:</label>
            <InputText id="dni" placeholder="DNI" class="p-invalid" v-model.trim="dni" />
            <InlineMessage v-if="!dni">El DNI es obligatorio!</InlineMessage>
        </div>

        <Button class="mt-4 mb-3" label="Submit" @click="registerUser" />
        <Button label="Volver a Inicio de Sesion" severity="danger" @click="goLogin" />
    </div>
</template>

<script>
</script>
<style></style>