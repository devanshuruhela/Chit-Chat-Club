import React from "react";
import "./home.styles.css";
import Card from "../../Components/Shared/Card/card.component";
import logo from "../../images/logo.png";
import arrow from '../../images/arrow-forward.png'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="card-container">
      <Card logo={logo} heading={`Welcome to Chit-Chat Club!`}>
        <div className="card">
      <p className="text">
        We’re working hard to get Chit-Chat Club ready for everyone!
        While we wrap up the finishing youches, we’re adding people
        gradually to make sure nothing breaks
      </p>
      <div>
        <button>
          <span>Get your Username</span>
          <img src={arrow} alt="arraow-forward" />
        </button>
      </div>
      <div>
        <span>Have an invite text?</span>
        <Link to='/login'>Sign in</Link>
      </div>
    </div>
      </Card>
    </div>
  );
};

export default Home;
