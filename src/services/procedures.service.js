import axios from "axios"

const http = axios.create({
    baseURL:"https://tramigo.azurewebsites.net/api"
})

export class ProceduresService {

    getAllProcedure() {
        return http.get('/Procedure')
    }
    getProcedureById(id) {
        return http.get('/Procedure/'+id);
    }
    deleteProcedure(id) {
        return http.delete('/Procedure/'+id);
    }
}