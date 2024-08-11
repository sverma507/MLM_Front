import React, { useState } from "react";
import "./MyTeam.css";
import Layout from "../../components/Layout";

const MyTeam = () => {
  const [activeMember, setActiveMember] = useState(true);
  const [activeActMembButton, setActiveActMembButton] = useState("B10%");

  const handleActiveClick = () => {
    setActiveMember(true);
  };

  const handleUnrechargedClick = () => {
    setActiveMember(false);
  };

  const handleActMembButtonClick = (button) => {
    setActiveActMembButton(button);
  };

  const teamData = [
    { id: 1, name: "9728230665", number: "31", amount: 470 },
    { id: 2, name: "9728230665", number: "5051", amount: 470 },
    { id: 3, name: "9728230665", number: "17919", amount: 7800 },
    { id: 4, name: "9728230665", number: "75035", amount: 470 },
    { id: 5, name: "9728230665", number: "5496", amount: 3700 },
    { id: 6, name: "9728230665", number: "0611", amount: 470 },
    { id: 7, name: "9728230665", number: "281", amount: 470 },
    { id: 8, name: "9728230665", number: "0", amount: 470 },
  ];

  return (
    <Layout>
    <div className="myTeamContainer text-white">
      <div className="teamHeader">
        <button>◀️Back</button>
        <h1 className="text-white">My Teams</h1>
      </div>
      <div className="memberStatus">
        <button
          onClick={handleActiveClick}
          className={activeMember ? "activeButton" : ""}
        >
          Active Member
        </button>
        <button
          onClick={handleUnrechargedClick}
          className={!activeMember ? "activeButton" : ""}
        >
          Unrecharged Member
        </button>
      </div>
      <h2>Active Members: 40</h2>
      <div className="actMemb">
        <button
          onClick={() => handleActMembButtonClick("B10%")}
          className={activeActMembButton === "B10%" ? "activeButton" : ""}
        >
          B10% -(31)
        </button>
        <button
          onClick={() => handleActMembButtonClick("C5%")}
          className={activeActMembButton === "C5%" ? "activeButton" : ""}
        >
          C5% -(169)
        </button>
        <button
          onClick={() => handleActMembButtonClick("D2%")}
          className={activeActMembButton === "D2%" ? "activeButton" : ""}
        >
          D2% -(273)
        </button>
      </div>
      <div className="teamTable">
        <table>
          <thead>
            <tr className="headTeamTH">
              <th>Accounts</th>
              <th>Number of invites</th>
              <th>Products</th>
            </tr>
          </thead>
          <tbody>
            {teamData.map((data) => (
              <tr className="thteamInvite" key={data.id}>
                <td>{data.name}</td>
                <td>{data.number}</td>
                <td>₹{data.amount}<br/> <button className="morePrice">+</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </Layout>
  );
};

export default MyTeam;