import React from "react";
import { useEffect, useState } from "react";
import "./Base.css";
import { getAuctions, getUsers, logIn } from "../components/FetchAuctions";

const Api1 = () => {
  const [auctions, setAuctions] = useState([]);
  const [users, setUsers] = useState([]);

  const handleClick = async () => {
    let response = await getAuctions();
    const data = await response.json();
    setAuctions(data);
    console.log(auctions);
  };

  const listUsers = async () => {
    let response = await getUsers();
    const data = await response.json();
    setUsers(data);
    console.log(users);
  };

  const handleLogIn = async () => {
    try {
      let response = await logIn();
      const loginData = await response.json();
      console.log(loginData)
      console.log("Logged in")
      console.log(response.status)
    } catch (e) {
      console.error("Error: ", e)
    }
    
  }

  // useEffect(() => {
  //   handleClick();
  // }, []);

  return (
    <main className="mainPage">
      <h1>Api 1</h1>
      <div className="api1-btns">
        <div>
          <button onClick={handleClick}>Get Auctions</button>
        </div>
        <div>
          <button onClick={listUsers}>Get Users</button>
        </div>
        <div>
          <button onClick={handleLogIn}>Log In</button>
        </div>
      </div>
      <div className="apiDiv">
        {auctions.map((auction) => {
          return (
            <div key={auction.id} className="auction-box">
              <p className="auctionId">{auction.id}</p>
              <div>
                <div className="auction-title">
                  <h3>Title</h3>
                  <p>{auction.title}</p>
                  <h4>Celebrity</h4>
                  <p>{auction.celebrityName}</p>
                </div>
                <div className="auction-desc">
                  <h3>Desription</h3>
                  <p>{auction.productDescription}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Api1;
