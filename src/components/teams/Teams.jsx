import React from "react";
import "../../utils/css/teams.css";
import TeamsData from "./TeamsData";

const Teams = () => {
  return (
    <>
      <section className="team topMargin">
        <div className="container">
          <div className="heading">
            <h3>OUR TEAM</h3>
            <h1>Professional Cleaners</h1>
          </div>
          <div className="teamG topMargin">
            {TeamsData.map((team) => {
              return (
                <>
                  <div className="team-details">
                    <img src={team.image} alt="Person" />
                    <h1>{team.name}</h1>
                    <h2>{team.title}</h2>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
