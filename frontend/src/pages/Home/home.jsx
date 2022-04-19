import React from "react";
import "./home.styles.css";
import Card from "../../Components/Shared/Card/card.component";
import logo from "../../images/logo.png";
import { Link , useNavigate } from "react-router-dom";
import Button from "../../Components/Shared/Button/button.component";

const Home = () => {

  const navigate= useNavigate();
  function startRegister()
  {
    navigate('/authenticate')
    // console.log('Clicked');
  }
  return (
    <div className="card-container">
      <Card logo={logo} heading='Welcome to Chit-Chat Club!'>
          <p className="text">
            We’re working hard to get Chit-Chat Club ready for everyone! While
            we wrap up the finishing youches, we’re adding people gradually to
            make sure nothing breaks
          </p>
          <div>
            <Button onClick={startRegister} btntext="Let's Go"></Button>
          </div>
          <div className="signin-container">
            <span className="hasinvite">Have an invite text?</span>
            {/* <Link className="signin-link" to="/login">
              Sign in
            </Link> */}
          </div>
      </Card>
    </div>
  );
};

export default Home;
