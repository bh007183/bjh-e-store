import React, { useState, useEffect, useContext} from "react";
import ShoppingNav from "../../components/ShoppingNav";
import Grid from "@material-ui/core/Grid";
/////
import {Link} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {Context} from "../context"

/////
import "./style.css";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    height: "100%",
    padding: 0,
  },
  
});

export default function Bikes(props) {

  const {individualProduct, setIndividualProduct} = useContext(Context)

  const individualItem = (event) => {
 
    axios.get("https://e-store-test.herokuapp.com/api/products/item/" + event.target.attributes[0].value)
    .then(res => setIndividualProduct({product: res.data}))
    
    .catch(err => alert(err))
  }

  //styling
  const classes = useStyles(props);
  ///
  const [bikes, setBikes] = useState({
    bikeArray: [],
    subCat: [],
  });
  let category = "Biking";

  useEffect(() => {
    let subCatArray = [];
    axios
      .get(`https://e-store-test.herokuapp.com/api/products/${category}`)
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          subCatArray.push(res.data[i].subCategory);
        }
        let unique = [...new Set(subCatArray)];
        setBikes({ ...bikes, bikeArray: res.data, subCat: unique });
      })
      .catch((err) => console.error(err));
  }, []);

 const onSubCatClick = (event) => {
    axios.get(`https://e-store-test.herokuapp.com/api/products/subCat/${event.target.attributes[0].value}`)
    .then((res) => 
      setBikes({ ...bikes, bikeArray: res.data,})
    )
    .catch((err) => console.error(err));
};

const onAllSubCatClick = () => {
    let subCatArray = [];
    axios
      .get(`https://e-store-test.herokuapp.com/api/products/${category}`)
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          subCatArray.push(res.data[i].subCategory);
        }
        let unique = [...new Set(subCatArray)];
        setBikes({ ...bikes, bikeArray: res.data, subCat: unique });
      })
      .catch((err) => console.error(err));

}

 


  return (
    <>
      <ShoppingNav />
      <Grid container spacing={2}>
        <Grid item container>
          <button
              style={{ marginRight: "1vw" }}
              onClick={onAllSubCatClick}>All</button>
          {bikes.subCat.map((sub, index) => (
            <button
              value={sub}
              style={{ marginRight: "1vw" }}
              key={index}
              onClick={onSubCatClick}
            >
              {sub}
            </button>
          ))}
        </Grid>
        {bikes.bikeArray.map((bike) => (
          <Grid item xs={12} sm={4}>
            <Card data-id={bike.id} key={bike.itemid} onClick={individualItem} className={classes.root} style={{display:"flex", justifyContent: "center"}}>
              <CardActionArea>
                <img
                  className='cardImage'
                  
                  src={bike.image}
                  alt={bike.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {bike.title}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h2">
                    {"$" + bike.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {bike.description.substring(0, 150) + "..."}
                  </Typography>
                  <Link to="/itempage" className="viewButtonLink" >
              <button value={bike.id} className="viewButton" style={{width:"100%", height: "30px"}} onClick={individualItem} >
                  View
                </button>
                </Link>
                </CardContent>
              </CardActionArea>
              
            </Card>
            
            
          </Grid>
        ))}
      </Grid>
    </>
  );
}
