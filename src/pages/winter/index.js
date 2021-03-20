import React, { Component, useState, useEffect, useContext } from "react";
import Button from "@material-ui/core/Button"
import axios from "axios"
import {Link} from "react-router-dom"
import NavBar from "../../components/navbar"
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {Context} from "../context"
import "./style.css";

export default function Winter() {

  const {individualProduct, setIndividualProduct} = useContext(Context)

  const individualItem = (event) => {
    axios.get("https://e-store-test.herokuapp.com/api/products/item/" + event.target.attributes[0].value)
    .then(res => setIndividualProduct({product: res.data}))
    
    .catch(err => alert(err))
  }

  const [featured, setFeatured] = useState({  
    featuredItem: []
  })

  useEffect(() => {
  axios.get("https://e-store-test.herokuapp.com/api/featured")
  .then(res => setFeatured({...featured, featuredItem: res.data}))
  .catch(err => alert(err))
   
  }, [])


 
    return (
      <>
      <NavBar/>
        <Carousel autoPlay>
          {featured.featuredItem.map((item, index) => 
          <Card className="hover" key={index}>
            <Grid container spacing={1}>
              <Grid item container xs={4}>
                <Grid xs={12} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              {(item.title)} 
              </Grid>
                <Grid xs={12}>
                  <Link to="/itempage" onClick={individualItem}>
                <button value={item.id} variant="outlined">View</button>
                </Link>
              </Grid>
              
              </Grid>
              <Grid item xs={4}>
              <img
                  className={"product-image"}
                  src={item.image}
                />
              </Grid>
              <Grid item xs={4} style={{display: "flex", alignItems: "center", justifyContent: "center"}} >
              {"$" + item.price}
              </Grid>
            </Grid>
          </Card>
          )}
        </Carousel>
        <Grid className="triangleContainTop" container xs={12}>
          <Grid item xs={12}>
            <Link to="/ski">
            <div className="triangle1 hover">
              <p className={"triangleText"}>Skiing</p>
            </div>
            </Link>
            <Link to="/hike">
            <div className="triangle2 hover">
              <p className={"triangleText2"}>Hiking</p>
            </div>
            </Link>
            <Link to="/raft">
            <div className="triangle3 hover">
              <p className={"triangleText"}>Rafting</p>
            </div>
            </Link>
            <Link to="/bike">
            <div className="triangle4 hover">
              <p className={"triangleText"}>Biking</p>
            </div>
            </Link>
          </Grid>
        </Grid>
      </>
    );
  }



