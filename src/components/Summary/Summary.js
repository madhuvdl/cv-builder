import SummaryList from "./SummaryList";
import WorkExp from "../WorkExp/WorkExp";
import RolesList from "../WorkExp/RolesList";

const Summary = () => {
    return (
<div className="summary">
              <h3 className="time-line-title"><span className="title-icon"><i class="bi bi-person"></i></span> Summary</h3>
              <SummaryList />
              

              <div className="work-exp">
              <h3 className="time-line-title"><span className="title-icon"><i class="bi bi-buildings"></i></span>Work Experience</h3>

                <WorkExp />
                <RolesList />
              <div className="page-break" />
                <WorkExp />
                <RolesList />
                {/* <h3 className="time-line-title">Work Experience</h3>
                <h5 className="role-title">
                  <span className="time-period">2021-8-Preset</span>
                  <span className="title-txt">Manager/Sr. Professional II-Senior Connectivity & NW Engineer</span> <span className="employer">Capgemini Engineering, Chennai</span>
                </h5> */}
                {/* <ul className="roles-list">
                  <li>Developed server-side components using Java EE or Spring frameworks</li>
                  <li>Designed and implemented database solutions.</li>
                  <li>Automated build, testing, and deployment processes using CI/CD pipelines.</li>
                  <li>Collaborated with front-end developers for seamless integration.</li>
                  <li>Created prototypes and proof-of-concept implementations.</li>
                  <li>Involved in complex software solutions design, development, and implementation</li>
                  <li>Collaborated with cross-functional teams to define project requirements</li>
                  <li>Identified skill gaps and arranged training programs.</li>
                  <li>Provided guidance and support in troubleshooting and debugging.</li>
                </ul> */}
                <div className="page-break" />
                {/* <h5 className="role-title">
                <span className="time-period">2018-11-2021-07</span>
                  <span className="title-txt">Senior Software Engineer</span> <span className="employer">Kyyba India (P) Ltd, Chennai</span></h5>
                <ul className="roles-list">
                <li>Developed server-side components using Java EE or Spring frameworks</li>
            <div  className="page-break" />
            <li>Designed and implemented database solutions.</li>
            <div  className="page-break" />
            <li>Automated build, testing, and deployment processes using CI/CD pipelines.</li>
            <div  className="page-break" />
            <li>Collaborated with front-end developers for seamless integration.</li>
            <div  className="page-break" />
            <li>Created prototypes and proof-of-concept implementations.</li>
            <div  className="page-break" />
            <li>Involved in complex software solutions design, development, and implementation</li>
            <div  className="page-break" />
            <li>Collaborated with cross-functional teams to define project requirements</li>
            <div  className="page-break" />
            <li>Identified skill gaps and arranged training programs.</li>
            <div  className="page-break" />
            <li>Provided guidance and support in troubleshooting and debugging.</li>
                </ul> */}
              </div>

          </div>
    )
}

export default Summary;
