import React, { useEffect, useState } from "react";
import { Context } from "../context";
import ShoppingNav from "../../components/ShoppingNav";
import Grid from "@material-ui/core/Grid";
import "./style.css";
import ReactDOM from "react-dom";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });


export default function Cart() {
  const [order, setOrder] = useState({
    itemArray: [],
    individualItemCost: "",
    totalCost: "",
    
  });

  useEffect(() => {
    let order = JSON.parse(localStorage.getItem(`item`));
    let adder = 0;
    let individual = [];
    for (let i = 0; i < order.length; i++) {
      adder += parseFloat(order[i].totalCost);
      // adder += parseFloat((order[i].totalCost).toFixed(2));
      individual.push(order[i].totalCost);
    }
    setOrder({
      ...order,
      itemArray: order,
      totalCost: adder,
      individualItemCost: individual,
    });
  }, []);

  const deleteItem = (event) => {
    let order = JSON.parse(localStorage.getItem(`item`));
    order.splice(event.target.attributes[0].value, 1);
    let adder = 0;
    let individual = [];
    for (let i = 0; i < order.length; i++) {
      adder += parseFloat(order[i].totalCost);
      individual.push(order[i].totalCost);
    }
    setOrder({
      ...order,
      itemArray: order,
      totalCost: adder,
      individualItemCost: individual,
    });
    localStorage.setItem(`item`, JSON.stringify(order));
  };

  const handleInputChange = (event) => {
    let order = JSON.parse(localStorage.getItem(`item`));

    order[event.target.attributes[0].value].quantity = event.target.value;
    order[event.target.attributes[0].value].totalCost =
      event.target.value * order[event.target.attributes[0].value].price;
    let adder = 0;
    let individual = [];
    for (let i = 0; i < order.length; i++) {
      adder += parseFloat(order[i].totalCost);
      individual.push(order[i].totalCost);
    }
    setOrder({
      ...order,
      itemArray: order,
      totalCost: adder,
      individualItemCost: individual,
    });
    localStorage.setItem(`item`, JSON.stringify(order));
  };

  //////////
  // PayPall
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  return (
    <div>
      <ShoppingNav />
      <Grid container className="backdrop" xs={12}>
        <Grid spacing={1} className="cardContain" container xs={12} sm={8}>
          {order.itemArray.map((product, index) => (
            <div key={index}>
              <Grid container spacing={1} className="productcard" item xs={12}>
                <Grid item xs={4}>
                  <div style={{ objectFit: "contain" }}>
                    <img style={{ width: "100%" }} src={product.image} />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <p>{product.title}</p>
                </Grid>
                <Grid item xs={2}>
                  {product.totalCost}
                </Grid>
                <Grid item xs={1}>
                  <input
                    name={index}
                    className="quantity"
                    onChange={handleInputChange}
                    defaultValue={product.quantity}
                  ></input>
                </Grid>
                <Grid item xs={1}>
                  <button onClick={deleteItem} value={index}>
                    X
                  </button>
                </Grid>
              </Grid>
              <hr />
            </div>
          ))}

          <Grid item xs={12}>
            <h2>${order.totalCost}</h2>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
           
              <PayPalButton
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
            />
           
            
          </Grid>
        </Grid>
        <Grid sm={4}>
          <p>This is practice site so any orders placed will not be created. Also do not enter you information into paypal! </p>
        </Grid>
      </Grid>
    </div>
  );
}
