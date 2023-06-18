import axios from "axios";

export class ProcedureAPI{
    getProcedures(){
        return axios.get("https://tramigo.azurewebsites.net/api/Procedure");
    }
}