<template>
  <br>
  <div class="medios-de-pago">
    <div v-for="payment in payments_" :key="payment.id" class="medio-de-pago">
      <i :class="getCardIcon(payment.type)"></i>
      <span>{{ payment.cardNumber.slice(-4) }}</span>
      <span>{{ payment.type }}</span>
    </div>
  </div>
  <div class="medios-de-pago">
    <div class="container-select-button">
      <div class="card flex justify-content-center">
        <Dropdown v-model="selectedPayment" :options="payments" optionLabel="name" placeholder="Select a Payment"
          class="w-full md:w-14rem" />
        <Button label="Submit" class="button" @click="onSubmit(true)"></Button>
      </div>
    </div>
  </div>

  <div class="card flex justify-content-center">
    <Dialog v-model:visible="visible" modal header="Realizar Pago" :style="{ width: '45vw' }"
      :breakpoints="{ '960px': '65vw', '641px': '95vw' }">
      <div class="card flex align-items-center justify-content-center">
        <Card style="width: 25em" class="card_dialog">
          <template #header>
            <div class="tarjet">
              <img alt="user header" src="@/assets/img/tarjet.png" width="225" />
            </div>
          </template>
          <template #title> Pago - {{ paymentTarjet.name }} </template>
          <template #subtitle> Detalle </template>
          <template #content>
            <div class="p-inputgroup flex-1 my-2">
              <span class="p-inputgroup-addon"> <i class="pi pi-credit-card"></i> </span>
              <InputText class="input" v-model="value1" type="number" :maxlength="16" placeholder="Numero de tarjeta" />
            </div>
            <div class="p-inputgroup flex-1 my-2">
              <span class="p-inputgroup-addon"> <i class="pi pi-calendar"></i> </span>
              <Calendar class="input" v-model="date" view="month" dateFormat="mm/yy" placeholder="Fecha" />
            </div>
            <div class="p-inputgroup flex-1 my-2">
              <span class="p-inputgroup-addon"> <i class="pi pi-credit-card"></i> </span>
              <InputText class="input" v-model="value2" type="number" :maxlength="4" placeholder="CVV" />
            </div>
            <div class="p-inputgroup flex-1 my-2">
              <span class="p-inputgroup-addon"> <i class="pi pi-user"></i> </span>
              <InputText class="input" v-model="value3" type="text" placeholder="Nombre" />
            </div>
            <div class="p-inputgroup flex-1 my-2">
              <span class="p-inputgroup-addon"> <i class="pi pi-user"></i> </span>
              <InputText class="input" v-model="value4" type="text" placeholder="Apellido" />
            </div>
            <div class="p-inputgroup flex-1 my-2">
              <span class="p-inputgroup-addon"> <i class="pi pi-envelope"></i> </span>
              <InputText class="input" v-model="value5" type="text" placeholder="Email" />
            </div>
          </template>
          <template #footer>
            <div class="bt">
              <Toast></Toast>
              <Button icon="pi pi-check" :label="`Pagar ${paymentTarjet.amount}`" severity="danger"
                @click="onPayment()" />
            </div>
          </template>
        </Card>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const selectedPayment = ref();

const payments = ref([
  { name: 'Visa', code: 'NY', amount: '$/ 550.00' },
  { name: 'MasterCard', code: 'RM', amount: '$/ 550.00' },
  { name: 'PayPal', code: 'LDN', amount: '$/ 550.00' },
  { name: 'American Express', code: 'IST', amount: '$/ 550.00' }
]);

const visible = ref(false);
const paymentTarjet = ref('');
const date = ref();
const value1 = ref();
const value2 = ref();
const value3 = ref();
const value4 = ref();
const value5 = ref();
const toast = useToast();

const onSubmit = (show) => {
  paymentTarjet.value = selectedPayment.value;
  visible.value = show;
}

const onPayment = () => {
  toast.add({ severity: 'success', summary: 'Pago realizado', detail: 'Pago realizado con exito', life: 2000 });
  setTimeout(() => { visible.value = false; }, 2000);
  clearAll();
}

const clearAll = () => {
  date.value = '';
  value1.value = '';
  value2.value = '';
  value3.value = '';
  value4.value = '';
  value5.value = '';
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
import { FakeUsersService } from "../services/fake-user.service";
export default {
  name: "payment",
  data() {
    return {
      payments_: [],
      fakeUserService: new FakeUsersService(),
    }
  },
  methods: {
    getCardIcon(type) {
      if (type === 'Visa') {
        return 'fab fa-cc-visa';
      } else if (type === 'MasterCard') {
        return 'fab fa-cc-mastercard';
      } else if (type === 'PayPal') {
        return 'fab fa-paypal';
      } else if (type === 'American Express') {
        return 'fab fa-cc-amex';
      } else {
        // Default icon class if the type is not recognized
        return 'fa fa-credit-card';
      }
    }
  },

  beforeMount() {
    const id = this.$route.params.id;
    const user = this.fakeUserService.getUser(id);
    this.payments_ = user.payments;
  },

};
</script>

<style scoped>
.bt,
.tarjet {
  text-align: center;
}

Button {
  width: 75%;
}

.button {
  margin-left: 10px;
}

.medios-de-pago {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: whitesmoke;
}

.medio-de-pago {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #4dd0749d;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  width: 70%;
  margin-bottom: 20px;
}

.medio-de-pago i {
  font-size: 36px;
  margin-right: 20px;
}

.medio-de-pago span {
  font-size: 24px;
  text-align: right;
  width: 60%;
}

@media only screen and (max-width: 770px) {
  .container-select-button {
    width: 70%;
  }

  .button {
    width: 50%;
  }

  span {
    font-size: 22px !important;
  }
}


@media only screen and (max-width: 510px) {
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card_dialog {
    width: 22em !important;
  }

  .medio-de-pago {
    width: 90%;
  }

  span {
    font-size: 17px !important;
  }

  .container-select-button {
    width: 85%;
  }

  .w-full {
    margin: 10px;
  }

  .button {
    width: 50%;
  }
}
</style>
