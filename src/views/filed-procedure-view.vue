<template>
    <Card>
      <template #title> Tramites Archivados</template>
    </Card>
    <DataTable :value="FiledProcedure" tableStyle="min-width: 50rem" @row-select="openDialog">
      <Column field="id" header="N."></Column>
      <Column field="name" header="Name"></Column>
      <Column field="description" header="Description"></Column>
      <Column field="status" header="Status"></Column>
    </DataTable>
</template>

<script>
import { FakeUsersService } from '@/services/fake-user.service'
  export default{
    name: 'FiledProcedureComponent',
    data() {
      return {
        FiledProcedure:[],
        fakeUserService: new FakeUsersService(),
      }
    },
    beforeMount(){
        this.FiledProcedure = this.fakeUserService.getStoreProcedure()
        // console.log(this.Procedure)
    }
  }
</script>