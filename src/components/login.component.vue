
<template>
    <div class="card flex flex-column align-items-center">
        <img class="mx-auto" src="../assets/img/logo-tramigo.png" alt="logo">
        <p class="text-3xl font-medium text-900">Bienvenido a tramigo</p>
        <div class="flex flex-column md:flex-row">
            <div class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                <div class="flex align-items-center gap-2">
                    <label>Usuario:</label>
                    <InputText id="username" type="text" class="w-full" />
                </div>
                <div class="flex align-items-center gap-2">
                    <label>Contraseña:</label>
                    <InputText id="password" type="password" class="w-full" />
                </div>
                <RouterLink to="/profile">
                    <Button label="Login" icon="pi pi-user" class="w-10rem"></Button>
                </RouterLink>
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

<script>
export default{
    methods:{
        profile:function (){
            this.$router.push('/profile');
        }
    },
}
</script>