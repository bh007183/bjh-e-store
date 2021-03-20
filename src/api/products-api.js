import axios from "axios"
export default {
getProductsBySub: function (subcategory) {
    axios.get(`https://e-store-test.herokuapp.com/api/products/${subcategory}`)
}


}