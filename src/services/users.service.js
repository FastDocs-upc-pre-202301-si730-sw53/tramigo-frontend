import axios from "axios"

const http = axios.create({
    baseURL:"http://localhost:3000"
})

export class UsersService {

    getAllUser() {
        return http.get('/user')
    }

    getUserById(id) {
        return http.get('user/'+id)
    }

    createUser(body) {
        return http.post('user',body)
    }

    updateUser(id,body){
        return http.patch('user/' + id,body)
    }

    deleteUser(id){
        return http.delete('user/' + id)
    }
}

