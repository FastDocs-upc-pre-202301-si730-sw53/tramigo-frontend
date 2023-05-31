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
    procedure = [
        {
            "id": 1,
            "userId": 1,
            "name": "Solicitud de Contratación WIN",
            "description": "Solicitud de contratación de un plan de internet",
            "status": "Pendiente"
        },
        {
            "id": 2,
            "userId": 1,
            "name": "Solicitud de Admisión Universitaria UPC",
            "description": "Solicitud de admisión a la carrera de Ingeniería de Sistemas en la UPC",
            "status": "Pendiente"
        }
    ]

    getUsers() {
        return (this.users)
    }

    getUser(id) {
        console.log(id);
        return this.users.find(user => user.id == id);
    }


    getLoggedUser() {
        console.log(this.idLogin)
        return this.users.find(user => user.id === this.idLogin)
    }

    createUser(body) {
        this.users.push(body)
        console.log("Usuario Creado")
    }

    saveUserId(num) {
        this.idLogin = num;
        console.log(num)
        console.log(this.idLogin)
        console.log('Logged In')
    }

    getAllProcedure(userId){
        return this.procedure.filter(procedure => procedure.userId === userId);
    }
    getProcedure(){
        return this.procedure;
    }
}
