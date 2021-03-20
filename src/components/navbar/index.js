import React, { useState } from "react";
import Hidden from "@material-ui/core/Hidden";
import SimpleMenu from "../mobilemenu";

import Grid from "@material-ui/core/Grid";
import Modal from "react-modal";
import "./style.css";
import Button from "@material-ui/core/Button";
import API from "../../api/admin-api"
Modal.setAppElement("#root");

export default function NavBar() {

  // styling for admin modal
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
// admin modal stuff
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [AdminLogin, SetAdminLogin] = useState ({
    username: "",
    password: ""
  })
//admin modal login
  const handleInputChange = event => {
    let value = event.target.value
    let name = event.target.name

    SetAdminLogin({...AdminLogin, [name]: value})
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
// admin login api 
  const handleSubmit = () => {
    API.AdminLoginFunction(AdminLogin)
    .then(res => console.log(res))
    .catch(err => alert(err))

  }

  return (
    <>
      <div className={"header"}>
        <div className={"navrow"}>
          <Hidden xsDown>
            <Button onClick={()=> window.location.href = "/bike"}>Shop</Button>
            {/* <Button onClick={openModal} color="white">
              Admin
            </Button> */}
            <Button onClick={()=> window.location.href = "/about"}>About</Button>
            <Button onClick={()=> window.location.href = "/cart"}>Checkout</Button>
          </Hidden>
          <Hidden smUp>
            <SimpleMenu />
          </Hidden>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Admin Login</h2>
          </Grid>
          <Grid container item xs={10} spacing={0}>
            <form>
              <Grid item xs={10}>
                <input
                onChange={handleInputChange}
                name="username"
                value={AdminLogin.username}
                
                />
              </Grid>
          
              <Grid item xs={10}>
                <input
                onChange={handleInputChange}
                name="password"
                value={AdminLogin.password}
                />
              </Grid>
              <button onClick={handleSubmit}>Enter </button>
            </form>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}
