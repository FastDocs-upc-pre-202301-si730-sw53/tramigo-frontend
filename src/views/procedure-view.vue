<template>
    <Card>
      <template #title> Mis Tramites</template>
    </Card>
    <DataTable :value="Procedure" tableStyle="min-width: 50rem">
      <Column field="id" header="N."></Column>
      <Column field="name" header="Name"></Column>
      <Column field="description" header="Description"></Column>
      <Column field="status" header="Status"></Column>
    </DataTable>
</template>

<script>
import { FakeUsersService } from '@/services/fake-user.service'
  export default{
    name: 'ProcedureComponent',
    data() {
      return {
        Procedure:[],
        fakeUserService: new FakeUsersService(),
      }
    },
    beforeMount(){
        this.Procedure = this.fakeUserService.getProcedure()
        console.log(this.Procedure)
    }
  }
</script>

<style scoped>
</style>