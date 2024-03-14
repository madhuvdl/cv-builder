import React from "react";
import "./Intro.css";

const Intro = (props) => {
  const { name, title } = props.intro;
  return (
    <>
        <h1 className="name josefin-sans-bold">{name}</h1>
        <h3 className="sub-title">{title}</h3>
    </>
  );
};

export default Intro;
