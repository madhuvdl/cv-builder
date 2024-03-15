import React, { useEffect, useState, useRef, useContext } from "react";
import { useReactToPrint } from "react-to-print";
import { saveAs } from "file-saver";
import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TabStopPosition,
  TabStopType,
  TextRun
} from "docx";
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

  // let source;

  // const handleDoc = () => {
  //   console.log('componentRef.current ', componentRef.current.innerHTML);
  //   var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
  //           "xmlns:w='urn:schemas-microsoft-com:office:word' "+
  //           "xmlns='http://www.w3.org/TR/REC-html40'>"+
  //           "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
  //      var footer = "</body></html>";
  //      var sourceHTML = header+document.getElementById("doc_wrapper").innerHTML+footer;
       
  //      source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
  //      var fileDownload = document.createElement("a");
  //      document.body.appendChild(fileDownload);
  //      fileDownload.href = source;
  //      fileDownload.download = 'document.doc';
  //      fileDownload.click();
  //      document.body.removeChild(fileDownload);
  // }

const handleDoc = () => {

  const doc = new Document({
    sections: [{
      properties: {},
      children: [

        new Paragraph({
          children: [
        new TextRun({
          text: "Karthikeyan V",
          heading: HeadingLevel.TITLE,
          font: "Josefin Sans SemiBold",
          size: "24pt"
        }),
      ]}),

        new Paragraph({
          children: [
            new TextRun({
              text: "Sr. Professional II-Senior Connectivity & NW",
              font: "Josefin Sans SemiBold",
              size: "12pt",
              color: "#636060"
              // bold: true,
            }),
            // new TextRun({
            //   text: "\tGithub is the best",
            //   bold: true,
            // }),
          ],
        }),
      ],
    }]
  });

  Packer.toBlob(doc).then(blob => {
    console.log(blob);
    saveAs(blob, "Karthikeyan_V.docx");
    console.log("Document created successfully");
  });}

  return (
    <>
      <div className="header_date_and_print">
        <button onClick={handlePrint}>Save/Print</button>
        <button onClick={handleDoc}>Download Doc</button>
        {/* <a href="javascript:void(0);" onClick={() => {} }>Download as Doc</a> */}
      </div>
      <div className="wrapper" id="doc_wrapper" ref={componentRef} >
          <Intro intro={props.data}/>
          <Card card={props.data}/>
      </div>
    </>
  );
}
export default React.memo(Main);
