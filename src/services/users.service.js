import axios from "axios"

export class UserAPI {
    getUserbyId(id){
        return axios.get("https://tramigo.azurewebsites.net/api/User/"+id);
    }
}

