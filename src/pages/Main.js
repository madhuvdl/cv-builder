import React, { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Intro from "../components/Intro/Intro";
import Card from "../components/Card/Card";
import "../index.css";
import "../styles.css";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/?limit=1")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
    <>
      <div className="header_date_and_print">
        <button onClick={handlePrint}>Save/Print</button>
      </div>
      <div className="wrapper" ref={componentRef}>
        <Intro />
        <Card data={data} />
      </div>
    </>
  );
}
export default Main;
