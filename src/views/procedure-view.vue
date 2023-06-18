<template>
    <Card>
      <template #title> Mis Tramites</template>
    </Card>
    <DataTable :value="Procedure" tableStyle="min-width: 50rem" @row-select="openDialog">
      <Column selectionMode="single" header="Detalle"></Column>
      <Column field="id" header="N°."></Column>
      <Column field="name" header="Name"></Column>
      <Column field="description" header="Description"></Column>
      <Column field="status" header="Status"></Column>
    </DataTable>

    <div class="card flex justify-content-center">
        <Dialog v-model:visible="visible" modal header="Detalle Tramite" :style="{ width: '45vw' }" :breakpoints="{ '960px': '65vw', '641px': '95vw' }">
          <div class="card flex align-items-center justify-content-center">
          <Card style="width: 25em" class="card_dialog">
            <template #header>
              <div class="tarjet">
                <img alt="user header" src="@/assets/img/tarjet.png" width="225"/>
              </div>
            </template>
            <template #title> Estado - {{ status }} </template>
            <template #subtitle> Detalle </template>
            <template #content>
              <div class="p-inputgroup flex-1 my-2">
                <span class="p-inputgroup-addon"> <i class="pi pi-credit-card"></i> </span>
                <InputText class="input" type="text" disabled :placeholder="selectedProcedure.id" />
              </div>
              <div class="p-inputgroup flex-1 my-2">
                <span class="p-inputgroup-addon"> <i class="pi pi-id-card"></i> </span>
                <InputText class="input" type="text" disabled :placeholder="selectedProcedure.DNI" />
              </div>
              <div class="p-inputgroup flex-1 my-2">
                <span class="p-inputgroup-addon"> <i class="pi pi-at"></i> </span>
                <InputText class="input" view="text" disabled :placeholder="selectedProcedure.email"/>
              </div>
              <div class="p-inputgroup flex-1 my-2">
                <span class="p-inputgroup-addon"> <i class="pi pi-user"></i> </span>
                <InputText class="input" type="text" disabled :placeholder="selectedProcedure.name" />
              </div>
              <div class="p-inputgroup flex-1 my-2">
                <span class="p-inputgroup-addon"> <i class="pi pi-phone"></i> </span>
                <InputText class="input" type="text" disabled :placeholder="selectedProcedure.phone" />
              </div>
              <div class="p-inputgroup flex-1 my-2">
                <span class="p-inputgroup-addon"> <i class="pi pi-users"></i> </span>
                <InputText class="input" type="text" disabled :placeholder="selectedProcedure.username" />
              </div>
            </template>
            <template #footer>
            <div class="bt">
                <Button icon="pi pi-check" label="Realizar pago" severity="danger" @click="onPayment()" />
            </div>
          </template>
          </Card>
          </div>
        </Dialog>
    </div>
</template>


<script>
import { ProcedureAPI } from "../services/procedure.service"
export default{
  name: 'ProcedureComponent',
  data() {
    return {
      Procedure:[],
      procedureAPI: new ProcedureAPI(),
    }
  },
  beforeMount(){
    this.procedureAPI.getProcedures().then((response)=>{
            this.Procedure = response.data;
            console.log(this.Procedure);
        })
  }
}
</script>

<style scoped>
.tarjet {
  text-align: center;
}
</style>