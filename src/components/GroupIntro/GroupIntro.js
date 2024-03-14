import React from "react";
import "./group_intro.css";
import Summary from "../Summary/Summary";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Project from "../Project/Project";

const GroupIntro = (props) => {
  return (
    <div className="col-section">
    <div className="left-section">
    <Summary summary={props}/>

    </div>
    <div className="right-section">
        <PersonalInfo pinfo={props.group.personal} />
          <h3 className="rt-mn-title"><span className="title-icon"><i className="bi bi-laptop"></i></span>Skills</h3>
          <div className="rt-cont">

            {
              props.group.skills.map(item => (
                <div key={item.id}>
                  <h4 className="rt-mn-sub-title">{item.title}</h4>
                  <p className="rt-info">{item.desc}</p>
                </div>
              ))
            }
           
          </div>
          <h3 className="rt-mn-title"><span className="title-icon"><i className="bi bi-award"></i></span>Certifications</h3>
          <div className="rt-cont">
            <div className="rt-info">
              <ul>
                {props.group.certifications.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <Project pjdata={props.group.projects} />

    </div>
    </div>
  );
};

export default GroupIntro;
