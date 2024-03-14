import React from "react";
import GroupIntro from "../GroupIntro/GroupIntro";

function Card({ data }) {
  return (
    <main>
      <ul>
        {data?.map(({ description }) => (
          <>
            <div className="page-break" />
            <GroupIntro description={description} />
          </>
        ))}
      </ul>
    </main>
  );
}
export default Card;
