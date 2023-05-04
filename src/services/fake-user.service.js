export class FakeUsersService {
    idLogin = 0
    users = [
        {
            "id": 1,
            "name": "Javier",
            "DNI": 43829104,
            "username": "javier54",
            "email": "javier246@gmail.com",
            "password": "javier"
        },
        {
            "id": 2,
            "name": "Ana",
            "DNI": 51237890,
            "username": "anita21",
            "email": "ana_21@hotmail.com",
            "password": "gfdg152/"
        },
        {
            "id": 3,
            "name": "Carlos",
            "DNI": 71098237,
            "username": "carlitox",
            "email": "carlos55@gmail.com",
            "password": "dsrge271/"
        }
    ]

    getUsers(){
        return (this.users)
    }

    getUser(id) {
        return this.users.find(user => user.id === id)
    }

    createUser(body) {
        this.users.push(body)
        console.log("Usuario Creado")
    }

    saveUserId(num){
        this.idLogin=num;
        console.log('Logged In',)
    }

}