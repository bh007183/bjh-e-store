
import React, {useState, useMemo} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Bike from "./pages/biking"
import Hike from "./pages/hiking"
import Raft from "./pages/rafting"
import Ski from "./pages/skiing"
import './App.css';
import Winter from "./pages/winter"
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import {Context} from "./pages/context"
import Product from "./pages/individualproduct/product";
import Cart from "./pages/cart"
import background from "./background.jpg"

import About from "./pages/about";

function App() {

  const [individualProduct, setIndividualProduct] = useState ({
    product: ""
  })

  const memo = useMemo(()=> ({individualProduct, setIndividualProduct}), [individualProduct, setIndividualProduct])
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="BackGroundPat" maxWidth="xl" style={{padding: "0px"}}>
        <Context.Provider value={memo}>
    <Router>
     <Switch>
       <Route exact path="/">
    <Winter/>
    </Route>
    <Route exact path ="/bike">
      <Bike/>
    </Route>
    <Route exact path ="/raft">
      <Raft/>
    </Route>
    <Route exact path ="/hike">
      <Hike/>
    </Route>
    <Route exact path ="/ski">
      <Ski/>
    </Route>
    <Route exact path ="/itempage">
      <Product/>
    </Route>
    <Route exact path ="/cart">
      <Cart/>
    </Route>
    <Route exact path ="/about">
      <About/>
    </Route>
   
    </Switch>
    </Router>
    </Context.Provider>
    </Container>
    </React.Fragment>
    
  );
}

export default App;
