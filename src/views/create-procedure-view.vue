<template>
    <h1>En Desarrollo</h1>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { UsersService } from '../services/users.service';
import { ProceduresService } from '../services/procedures.service'

const API_PROCEDURE = new ProceduresService();
const API_USER = new UsersService();
const USER_ID = parseInt(localStorage.getItem('userID'));
const router = useRouter();
const user = ref([]);
const Procedure = ref([]);
const selectedProcedure = ref([]);
const status = ref(null);
const visible = ref(false);

API_PROCEDURE.getAllProcedure().then((response) => {
  Procedure.value = response.data.filter((dt) => dt.userId === USER_ID && dt.status === 'Concluido');
});

const openDialog = (event) => {
  status.value = event.data.status;
  
  API_USER.getUserById(parseInt(USER_ID)).then((response) => {
    user.value = response.data;
    selectedProcedure.value = user.value;
    visible.value = true;
  });
};
</script>