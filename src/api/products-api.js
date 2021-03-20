import axios from "axios"
export default {
getProductsBySub: function (subcategory) {
    axios.get(`https://bj-outdoor-estore-back.herokuapp.com/api/products/${subcategory}`)
}


}