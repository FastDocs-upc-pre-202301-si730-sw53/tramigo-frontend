export class FakeUsersService {
    idLogin = 0
    users = [
        {
            "id": 1,
            "name": "Javier",
            "DNI": 43829104,
            "username": "javier54",
            "email": "javier246@gmail.com",
            "password": "javier",
            "lastName1":"null",
            "lastName2":"null",
            "phone": "123456789",
            "payments": [
                {
                  "cardNumber": "1234567890123456",  // Random card number
                  "expirationDate": "06/2025",  // Random expiration date
                  "cvv": "123",  // Random cvv
                  "type": "Visa" // Random card type
                },
                {
                    "cardNumber": "2849571485927384",  // Random card number
                    "expirationDate": "05/2025",  // Random expiration date
                    "cvv": "334",  // Random cvv
                    "type": "MasterCard" // Random card type
                }
              ]
        },
        {
            "id": 2,
            "name": "Ana",
            "DNI": 51237890,
            "username": "anita21",
            "email": "ana_21@hotmail.com",
            "password": "gfdg152/",
            "lastName1":"null",
            "lastName2":"null",
            "phone": "123456789"
        },
        {
            "id": 3,
            "name": "Carlos",
            "DNI": 71098237,
            "username": "carlitox",
            "email": "carlos55@gmail.com",
            "password": "dsrge271/",
            "lastName1":"null",
            "lastName2":"null",
            "phone": "123456789"
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
