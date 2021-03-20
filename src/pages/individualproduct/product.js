import React, {  useContext } from "react";
import { Context } from "../context";
import ShoppingNav from "../../components/ShoppingNav";
import Grid from "@material-ui/core/Grid";
import "./style.css"



export default function Product() {
  const { individualProduct, setIndividualProduct } = useContext(Context);
  let order = JSON.parse(localStorage.getItem(`item`)) || []

   
 


  
 

  const AddToCart = event => {

    let obj = {
        title: individualProduct.product.title,
          image: individualProduct.product.image,
          description: (individualProduct.product.description).substring(0,150),
          quantity: 1,
          price: individualProduct.product.price,
          totalCost: individualProduct.product.price,
          orderTotal: individualProduct.product.price
    }
    order.push(obj)
      
    localStorage.setItem(`item`, JSON.stringify(order))
          
      }
     



  return (

    <>
    <ShoppingNav/>
      <Grid container className="backdrop"xs={12}>
        <Grid className="imgContain" container xs={12} sm={8}>
           
            
        <img className="productImage" src={individualProduct.product.image}/>
       
      
        </Grid>
        
        <Grid item xs={12} sm={4}>
        <div className="checkoutCard">
        <h2 className="itemTitle">{individualProduct.product.title}</h2>
        <Grid item xs={12} >
        <h2>${individualProduct.product.price}</h2>
          
        </Grid>
       
        <Grid>
            
           <button onClick={AddToCart} className="addToCartButton"><h3>Add To Cart</h3></button>
        </Grid>
        </div>
        </Grid>
        <Grid>
            <br></br>
            <hr></hr>
            <h3>Details:</h3>
            <hr></hr>
        <p className="descriptionpadding">{individualProduct.product.description}</p>
        </Grid>
        
        
        
       
      </Grid>
    </>
  );
}
