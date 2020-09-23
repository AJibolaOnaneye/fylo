import React from "react";
import illustration1 from "../pictures/illustration1.svg";

const Home = () => {
  return (
    <div className="container">
      <div className="flex">
        <div>
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <form>
            <input type="email" placeholder="Enter your email..." />
            <button>Get Started</button>
          </form>
        </div>
        <div>
          <img className="illustration" src={illustration1} alt="header-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
