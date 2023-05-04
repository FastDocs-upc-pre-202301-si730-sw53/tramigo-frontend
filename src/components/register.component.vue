<script>
import { ref } from 'vue';
import { UsersService } from '@/services/users.service'

export default {
    name: 'RegisterComponent',
    data() {
        return {
            username: '',
            password: '',
            name: '',
            email: '',
            dni: '',
            userService: new UsersService()
        }
    },
    methods: {
        registerUser() {
            //this.service.getAll().then(response =>{ console.log(response.status)})
            this.userService.getAll().then(response => {
                console.log(response.data)
            })
            console.log(username.value)
            this.$router.push('/login')
        }
    }
}
</script>


<template>
    <div class="card w-9 m-auto flex flex-column">
        <img class="mx-auto" src="../assets/img/logo-tramigo.png" alt="logo">
        <p class="text-3xl font-medium text-900">Registrate en tramigo</p>

        <div class="flex flex-wrap align-items-center mb-3 gap-2">
            <label for="username" class="p-sr-only">Nombre de usuario:</label>
            <InputText id="username" placeholder="Username" class="p-invalid" v-model.trim="username" />
            <InlineMessage v-if="!username">El nombre de usuario es obligatorio!</InlineMessage>
        </div>

        <div class="flex flex-wrap align-items-center gap-2">
            <label for="password" class="p-sr-only">Contraseña:</label>
            <InputText id="password" placeholder="Password" class="p-invalid" v-model.trim="password" />
            <InlineMessage v-if="!password">La contraseña es obligatoria!</InlineMessage>
        </div>

        <div class="flex flex-wrap align-items-center gap-2">
            <label for="name" class="p-sr-only">Nombre:</label>
            <InputText id="name" placeholder="name" class="p-invalid" v-model.trim="name" />
            <InlineMessage v-if="!name">El nombre es obligatorio!</InlineMessage>
        </div>

        <div class="flex flex-wrap align-items-center gap-2">
            <label for="email" class="p-sr-only">Email</label>
            <InputText id="email" placeholder="Email" class="p-invalid" v-model.trim="email" />
            <InlineMessage v-if="!email">El email es obligatorio!</InlineMessage>
        </div>

        <div class="flex flex-wrap align-items-center gap-2">
            <label for="dni" class="p-sr-only">DNI:</label>
            <InputText id="dni" placeholder="DNI" class="p-invalid" v-model.trim="dni" />
            <InlineMessage v-if="!dni">El DNI es obligaotrio!</InlineMessage>
        </div>

        <Button class="mt-4" label="Submit" @click="registerUser" />
    </div>
</template>

<script>
</script>
<style></style>