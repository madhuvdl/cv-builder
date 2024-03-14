import React from 'react';
import SummaryList from "./SummaryList";
import WorkExp from "../WorkExp/WorkExp";
import RolesList from "../WorkExp/RolesList";
import Education from "../Education/Education";

const Summary = (props) => {
  console.log('summary props  ', props);
    const { summary, experience, education } = props.summary.group;
    return (
<div className="summary">
              <h3 className="time-line-title"><span className="title-icon"><i className="bi bi-person"></i></span> Summary</h3>
              <SummaryList summary={summary}/>
              

              <div className="work-exp">
              <h3 className="time-line-title"><span className="title-icon"><i className="bi bi-buildings"></i></span>Work Experience</h3>

                {experience && (
                  <WorkExp workData={experience}/>
                )
                }
               
                {/* <div className="page-break" /> */}
                <Education data={education} />
               
              </div>

          </div>
    )
}

export default React.memo(Summary);
