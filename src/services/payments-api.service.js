import axios from "axios";

class PaymentsApiService{
    getPayments(){
        return axios.get("https://localhost:7032/api/Payment");
    }
    getPaymentById(id){
        return axios.get("https://localhost:7032/api/Payment/"+id);
    }
}

export default PaymentsApiService;