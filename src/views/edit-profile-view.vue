<template>
    <Card>
      <template #title> Editar Perfil</template>
    </Card>
    <div class="format">
        <div>
            <label for="username">Username</label>
            <InputText id="username" v-model="value" aria-describedby="username-help" />
        </div>
        <div>
            <label for="email">Email</label>
            <InputText id="email" v-model="value" aria-describedby="email-help" />
        </div>
        <div>
            <label for="password">Password</label>
            <InputText id="password" v-model="value" aria-describedby="password-help" />
        </div>
        <Button type="submit" label="Submit" />
    </div>
</template>

<script>
export default {
    name: 'Edit-Profile-Component'
}
</script>

<style scoped>
.format{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    gap: 1rem;
}
</style>
