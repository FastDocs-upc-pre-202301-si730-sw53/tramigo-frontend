<template><br>
<div class="medios-de-pago">
  <div class="medio-de-pago">
    <i class="fab fa-cc-visa"></i>
    <span>Visa</span>
  </div>
  <div class="medio-de-pago">
    <i class="fab fa-cc-mastercard"></i>
    <span>Mastercard</span>
  </div>
  <div class="medio-de-pago">
    <i class="fab fa-paypal"></i>
    <span>PayPal</span>
  </div>
  <div class="medio-de-pago">
    <i class="fab fa-cc-amex"></i>
    <span>American Express</span>
  </div><br>
    <div class="container-select-button">
      <div class="card flex justify-content-center">
          <Dropdown v-model="selectedPayment" :options="payments" optionLabel="name" placeholder="Select a Payment" class="w-full md:w-14rem" />
          <Button label="Submit" class="button"></Button>
      </div>
    </div>
</div>
</template>

<script setup>
import { ref } from "vue";

const selectedPayment = ref();
const payments = ref([
    { name: 'Visa', code: 'NY' },
    { name: 'MasterCard', code: 'RM' },
    { name: 'PayPal', code: 'LDN' },
    { name: 'American Express', code: 'IST' }
]);
</script>

<style>
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



</style>