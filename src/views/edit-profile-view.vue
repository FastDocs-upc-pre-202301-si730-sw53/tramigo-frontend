<template>
    <Card>
      <template #title> Editar Perfil</template>
    </Card>
    <div class="format">
        <div>
            <label for="username">Nombre de Usuario</label>
            <InputText id="username" v-model="username" aria-describedby="username-help" class="input_name"/>
        </div>
        <div>
            <label for="email">Correo</label>
            <InputText id="email" v-model="email" aria-describedby="email-help" class="input_email"/>
        </div>
        <div>
            <label for="phone">Telefono</label>
            <InputText id="phone" v-model="phone" aria-describedby="phone-help" class="input_phone"/>
        </div>
        <Button type="submit" label="Submit" @click="updateUser" />
    </div>
</template>

<script>
import { FakeUsersService } from '@/services/fake-user.service'
export default {
    name: 'Edit-Profile-Component',
    data() {
    return {
      username: '',
      email: '',
      phone: '',
      fakeUserService: new FakeUsersService()
    }
    },
    methods: {
    updateUser() {
      const id = this.$route.params.id
      console.log(id);
      this.fakeUserService.putProfile(id, this.username, this.email, this.phone)
        .then(() => {
          this.$toast.add({
            severity: "success",
            summary: "Success",
            detail: "Usuario Actualizado",
            life: 3000
          });
          //this.$router.push(`/profile/${id}`);
        })
        .catch(error => {
          console.error(error);
          // Manejar el error si es necesario
        });
    }
  }
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

label {
  margin-right: 10px;
}

.input_name {
  width: 250px;
}

.input_email {
  width: 339px;
}

.input_phone {
  width: 325px;
}

Button {
  margin-top: 25px;
  width: 150px;
}

@media only screen and (max-width: 550px) {
  .input_name {
    width: 325px;
  }

  .input_email {
    width: 325px;
  }

  .input_phone {
    width: 325px;
  }
}
</style>
