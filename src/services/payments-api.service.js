import axios from "axios";

class PaymentsApiService {
    getPayments(){
        return axios.get("https://tramigo.azurewebsites.net/api/payment");
    }
    getPaymentById(id){
        return axios.get("https://tramigo.azurewebsites.net/api/payment/"+id);
    }
}

export default PaymentsApiService;