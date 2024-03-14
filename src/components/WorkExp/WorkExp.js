import React from 'react';

import { resume_data } from '../../data/mock';
import RolesList from './RolesList';

const WorkExp = (props) => {
    // const { experience } = data;
    console.log('work exp Data Props  ', resume_data.experience);
    return (
        <>
            {/* <div className="page-break" /> */}
            <div>
            {resume_data.experience.map((item, index) => (
                <>
            <h5 className="role-title" key={item.id}>
                <span className="time-period">{item.duration}</span>
                <span className="title-txt">{item.role}</span> <span className="employer"> {item.comp}</span>
            </h5>

            <ul className="roles-list">
                {item.responsibilities.map((role) => (
                    <li key={role.id}>{role.desc}</li>
                ))}
            </ul>
                </>
            ))}

            </div>
        </>
    )
}

export default React.memo(WorkExp);
