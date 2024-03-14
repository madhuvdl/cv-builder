import React from "react";
const SummaryList = ({ summary }) => {
    return (
        <div>
            <ul className="summary-lists">
                {
                    summary.map((item, index) => (
                        <li key={item.id}>{item.description}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default React.memo(SummaryList);
