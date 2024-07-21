import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Modal } from "bootstrap/dist/js/bootstrap.bundle";
import Contact from "./Contact";
const Footer = () => {
  function done() {
    alert("data submitted");
  }
 function facebook(){
window.location='https://www.facebook.com/';
 }
 function insta(){
  window.location="https://instagram.com/mukul.1606?igshid=NDk5N2NlZjQ="
 }
 function email(){
  window.location="https://mail.google.com/mail/u/0/#inbox"
 }


  return (
    <>
      <div className="container-fluid" style={{width:'auto'}}>
        <div className="icons">
          
            <svg data-testid="FacebookRoundedIcon"></svg>
          <FacebookRoundedIcon onClick={facebook} id="mui-icons" style={{ color: "black", fontSize: "45px", float: "left" }}></FacebookRoundedIcon>
          <svg data-testid="InstagramIcon"></svg>
          <InstagramIcon onClick={insta} id="mui-icons" style={{  color: "black",  fontSize: "45px",  float: "left",  marginLeft: "5px",}}
          ></InstagramIcon>
          <svg data-testid=" MailOutlineRoundedIcon "></svg>
          <MailOutlineRoundedIcon onClick={email} id="mui-icons" style={{  color: "black",  fontSize: "45px",  float: "left",  marginLeft: "5px",}}
          ></MailOutlineRoundedIcon>
          {/* <h1 id='icon'  style={{float:"right",marginRight:"50px",fontSize:"20px"}}>EMAIL SIGNUP</h1> */}
          <button id="btn-foot"
            className="btn btn-dark"
            data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            style={{
              float: "right",
              marginRight: "5px",
              fontSize: "15px",
              height: "40px",
              marginTop: "20px",
            }}
          >
            EMAIL SIGNUP
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Enter the given details for Signup
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form action="" onSubmit={done}>
                    <label for="fname">First Name:</label>
                    <br />
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                    ></input>
                    <br />
                    <br />
                    <label for="lname">Last Name:</label>
                    <br />
                    <input type="text" placeholder="Last Name" required></input>
                    <br />
                    <br />
                    <label for="email">Email:</label>
                    <br />
                    <input type="email" placeholder="Email"></input>
                    <br />
                    <br />
                    <label for="password">Password:</label>
                    <br />
                    <input
                      type="password"
                      placeholder="Password"
                      required
                    ></input>
                    <br />
                    <br />

                    <input className="btn btn-secondary" type="submit" value="Submit" />
                  </form>
                </div>

                <div className="modal-footer">
                  {/* <button type="button" class="btn btn-primary" onSubmit={done}>Submit</button> */}
                </div>
              </div>
            </div>
          </div>

          <h1 id="icon" style={{ float: "right", marginRight: "13px", fontSize: "15px" }}><a href="/Contact" style={{textDecoration:"none",color:"black"}}> CONTACT</a></h1>
          <h1 id="icon" style={{ float: "right",marginTop:'-120px',marginRight:'218px', fontSize: "15px" }}><a href="/Carrer" style={{textDecoration:"none",color:"black"}} > CAREERS </a> </h1>
          <h5 style={{ textAlign: "center", fontStyle: "italic" }}>
            powered by BentoBox{" "}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Footer;

{
  /* <svg data-testid='DeleteIcon'></svg>
       <svg data-testid='FacebookIcon'></svg>
       <FacebookIcon style={{color:"black"}}></FacebookIcon>

          <DeleteIcon style={{color:'black'}}/> */
}
