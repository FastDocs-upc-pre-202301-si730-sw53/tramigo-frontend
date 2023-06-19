import axios from "axios";

class PaymentsApiService {
    getPayments(){
        return axios.get("https://tramigo.azurewebsites.net/api/Payment");
    }
    getPaymentById(id){
        return axios.get("https://tramigo.azurewebsites.net/api/Payment/"+id);
    }
}

export default PaymentsApiService;