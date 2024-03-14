import React from "react";
import GroupIntro from "../GroupIntro/GroupIntro";

function Card(props) {
    const { signInfo, regards, signature} = props.card;
  return (
    <main>
      {/* <ul>
        {data?.map(({ description }) => (
          <> */}
            {/* <div className="page-break" /> */}
            <GroupIntro group={props.card}/>
            <div className="sign-block">
                <h3 className="thankyou">{signInfo}</h3>
                <p className="thk-sign">{regards}</p>
                <h3 className="signature">{signature}</h3>
            </div>
          {/* </>
        ))}
      </ul> */}
    </main>
  );
}
export default Card;
