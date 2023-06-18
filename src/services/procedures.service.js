import axios from "axios"

const http = axios.create({
    baseURL:"https://tramigo.azurewebsites.net/api"
})

export class ProceduresService {

    getAllProcedure() {
        return http.get('/procedure')
    }
    getProcedureById(id) {
        return http.get('/procedure/'+id);
    }
}