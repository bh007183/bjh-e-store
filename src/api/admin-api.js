import axios from "axios"
export default {
AdminLoginFunction: function (object) {
    axios.post("https://bj-outdoor-estore-back.herokuapp.com/api/AdminLogin", object)
}





}