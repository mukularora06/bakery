import React from "react";
// import "./about.css"
import Navbar from "./Navbar";
import imgi from "../images/1.png";
import imga from "../images/abu.jpg";
import imgv from "../images/vision.jpg";
import imgm from "../images/mission.jpeg";
import imgj from "../images/join.jpeg";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-main">
        <div className="main">
          <header>
            <h1 className="heading">
              <marquee>About Us</marquee>
            </h1>
          </header>
          <body style={{ backgroundColor: "bisque" }}>
            <img className="img-body" src={imga}></img>
            <h1 className="hell">Why We Do It?</h1>
            <br />
            <br />
            <br />
            <h3 className="flt" style={{ color: "blue" }}>
              Because we love it.
            </h3>
            <br />
            <br />
            <p
              className="content"
              style={{ marginRight: "50px", marginLeft: "450px" }}
            >
              In 2021,Arora Bakery opened its first Model Town Location In
              Jalandhar.Arora Bakery is known as bakeryunique for our square
              cakes,cupcakes and doughnuts.we take pride in using natural
              ingredients in our cupcakes,cakes and desserts.
              <br />
              <br />
              <br />
              Our treates are as deliciously wholesome as they are beautifully
              decorated.choose from our signature cupcakes,weekly and holiday
              specials or custom created desserts
            </p>
            <br />
            <br />
            <br />

            <img className="img-body" src={imgv}></img>
            <h1 className="hell">Our Visions</h1>
            <br />
            <br />
            <br />
            <p
              className="content"
              style={{ marginRight: "50px", marginLeft: "450px" }}
            >
              Arora Bakery offers a homestyle bakery experience in the
              metropollitian area.Our vision is to create upsscale, quick-serve
              bakery with a focus on simple and satisfying souther style
              desserts and baked goods.
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <img className="img-body" src={imgm}></img>
            <h1 className="hell">Our Mission</h1>
            <br />
            <br />
            <br />
            <p
              className="content"
              style={{ marginRight: "50px", marginLeft: "450px" }}
            >
              Arora philosophy is to offer simple and delecious desserts that
              are easily accessible to clients via location or delivery
              optionss.Our ingredients are high quality,each dessert is
              carefully made with only the finest,all natural ingredients.
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <img className="img-body" src={imgj}></img>
            <h1 className="hell">Join Our Team</h1>
            <br />
            <br />
            <br />
            <p
              className="content"
              style={{ marginRight: "50px", marginLeft: "450px" }}
            >
              Amazing desserts.Amazing people.That's why Arora Bakery is all
              about.We look for people who share our passion for producing the
              highest quality freshly baked desserts with exceptional customer
              service,our team and their commitments to baking delecious
              products and providing gracious,attentive and knowledgeable
              service is what makes us great.As we grow,we are always looking
              for additional team members.To apply please send an email to:-
              <br />
              <br />
              <strong> mukul9109@gmail.com</strong>
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
          </body>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
