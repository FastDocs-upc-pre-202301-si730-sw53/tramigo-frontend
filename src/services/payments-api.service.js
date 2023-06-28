import axios from "axios";

const http = axios.create({
    baseURL:"https://tramigo.azurewebsites.net/api"
})

export class PaymentsApiService {
    getPayments(){
        return http.get("/Payment");
    }
    getPaymentById(id){
        return http.get("/Payment/"+id);
    }
}

// export default PaymentsApiService;