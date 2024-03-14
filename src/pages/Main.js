import React, { useEffect, useState, useRef, useContext } from "react";
import { useReactToPrint } from "react-to-print";
import Intro from "../components/Intro/Intro";
import Card from "../components/Card/Card";
import "../index.css";
import "../styles.css";
import { DataContext  } from "../DataContext";

const Main = (props) => {
  // const { data } = useContext(DataContext);
  // const [data, setData] = useState(MockData || []);
  // useEffect(() => {
  //   // fetch("https://fakestoreapi.com/products/?limit=1")
  //   fetch("http://localhost:3001/data/mock.json")
  //     // .then((res) => res.json())
  //     .then((res) => res)
  //     .then((data) => setData(data));
  // }, []);
  console.log('data props ', props.data);
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
          <Intro intro={props.data}/>
          <Card card={props.data}/>
      </div>
    </>
  );
}
export default React.memo(Main);
