import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/restaurantfood.png";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <p>
          Welcome to a culinary journey that transports you to the sun-kissed shores of the Mediterranean. Our restaurant invites you to savor the vibrant flavors and rich traditions of this iconic region, where each dish is a celebration of fresh, locally sourced ingredients and time-honored recipes.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve a Table</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;