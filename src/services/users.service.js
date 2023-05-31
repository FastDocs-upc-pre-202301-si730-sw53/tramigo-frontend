import axios from "axios"

const http = axios.create({
    baseURL:"http://localhost:3000/"
})

export class UsersService {

    getAll() {
        return http.get('user')
    }

    getById(id) {
        return http.get('user/'+id)
    }

    createUser(body) {
        return http.post('user',body)
    }

    updatePost(id,body){
        return http.patch('user/' + id,body)
    }

    delete(id){
        return http.delete('user/' + id)
    }
}

