import React, { useState } from "react";
import "./nav.css";
import { Link } from 'react-router-dom';


const Nav = () => {
  const [isHidden, setIsHidden] = useState(true);

  const Nav = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      {!isHidden ? (
        <div className="nav show">
          <div className="stline">
            <Link className="Link" to={"/"} ><h1 >Welcome</h1></Link>
            <img
            className="icon"
              src="https://cdn-icons-png.freepik.com/256/6574/6574802.png?ga=GA1.1.596290338.1724375721&semt=ais_hybrid"
              alt="Hide Button"
              onClick={Nav}
            />
          </div>
          <div className="item">
                    <img className="icon" src="https://cdn-icons-png.flaticon.com/128/7207/7207766.png" alt="" />
                    <Link className="Link" to={"/"}><h2 className="iconitem">Count</h2></Link>
                </div>
                    <br />
                <div className="item">
                    <img className="icon" src="https://cdn-icons-png.freepik.com/256/4309/4309056.png?ga=GA1.1.596290338.1724375721&semt=ais_hybrid" alt="" />
                    <Link className="Link" to={"/users"}><h2 className="iconitem">Users</h2></Link>
                </div>
                    <br />
                <div className="item">
                    <img className="icon" src="https://cdn-icons-png.freepik.com/256/1711/1711161.png?ga=GA1.1.596290338.1724375721&semt=ais_hybrid" alt="" />
                    <Link className="Link" to={"/posts"}><h2 className="iconitem">Posts</h2></Link>
                </div>

        </div>
      ) : (
        <div className="nav hide">
          <div className="stline">
            <img
            className="icon"
              src="https://cdn-icons-png.freepik.com/256/5914/5914981.png?ga=GA1.1.596290338.1724375721&semt=ais_hybrid"
              alt="Show Button"
              onClick={Nav}
            />
          </div>
          
          <Link to={"/"}><img className="icon" src="https://cdn-icons-png.flaticon.com/128/7207/7207766.png" alt="" /></Link>
          <br />
            <Link to={"/users"}><img className="icon log" src="https://cdn-icons-png.freepik.com/256/4309/4309056.png?ga=GA1.1.596290338.1724375721&semt=ais_hybrid" alt="" /></Link>
            <br />
            <Link to={"/posts"}><img className="icon log" src="https://cdn-icons-png.freepik.com/256/1711/1711161.png?ga=GA1.1.596290338.1724375721&semt=ais_hybrid" alt="" /></Link>
          
        </div>
      )}
    </>
  );
};

export default Nav;
