import axios from "axios"

const http = axios.create({
    baseURL:"https://tramigo.azurewebsites.net/api"
})

export class UsersService {

    getAllUser() {
        return http.get('/User')
    }

    getUserById(id) {
        return http.get('User/'+ id)
    }

    createUser(body) {
        return http.post('User',body)
    }

    updateUser(id,body){
        return http.patch('User/' + id, body)
    }

    deleteUser(id){
        return http.delete('User/' + id)
    }
}

