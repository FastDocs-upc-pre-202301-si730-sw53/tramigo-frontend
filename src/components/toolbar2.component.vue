<template>
    <div>
        <Toolbar>
            <template #start>
                <img src="../../src/assets/logo.png">
            </template>
            <template #center>
                <Button label="Inicio" icon="pi pi-home" severity="success" @click="profile()"/>
                <Button label="Mis Trámites" icon="pi pi-briefcase" severity="success" @click="procedure()"/>
                <Button label="Buscar Local" icon="pi pi-search" severity="success"/>
                <Button label="Medios de Pago" icon="pi pi-wallet" severity="success" @click="payment()"/>
            </template>
            <template #end>
                <Button icon="pi pi-power-off" severity="danger" @click="login()"/>
            </template>
        </Toolbar>
    </div>
</template>

<script>
  export default{
    name: 'Toolbar2',
    methods:{
        profile:function (){
            this.$router.push('/profile');
        },
        procedure:function (){
            this.$router.push('/procedure');
        },
        payment:function (){
            this.$router.push('/payment');
        },
        login:function (){
            this.$router.push('/login');
        }
  },
}
</script>

<style scoped>
 .p-toolbar {
    background-color: #004B2B;
  }
</style>