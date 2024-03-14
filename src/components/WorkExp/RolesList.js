import React from "react";
const RolesList = ({roles}) => {
    console.log('roles Lists ', roles);
    return (
        <>
        {/* <div className="page-break" /> */}
        <ul className="roles-list">
            {/* {roles.map((item) => (
                <li key={item.id}>{item.desc}</li>
            ))} */}
            {/* <li>Developed server-side components using Java EE or Spring frameworks</li>
            <li>Designed and implemented database solutions.</li>
            <li>Automated build, testing, and deployment processes using CI/CD pipelines.</li>
            <li>Collaborated with front-end developers for seamless integration.</li>
            <li>Created prototypes and proof-of-concept implementations.</li>
            <li>Involved in complex software solutions design, development, and implementation</li>
            <li>Collaborated with cross-functional teams to define project requirements</li>
            <li>Identified skill gaps and arranged training programs.</li>
            <li>Provided guidance and support in troubleshooting and debugging.</li> */}
        </ul>
        </>
    )
}

export default React.memo(RolesList);