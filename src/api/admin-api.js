import axios from "axios"
export default {
AdminLoginFunction: function (object) {
    axios.post("https://e-store-test.herokuapp.com/api/AdminLogin", object)
}





}