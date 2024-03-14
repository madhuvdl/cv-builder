import { resume_data } from "../../data/mock";

const Education = () => {
    console.log('education data ', resume_data.education);
    return (
        <>
            <h3 className="time-line-title"><span className="title-icon"><i className="bi bi-mortarboard"></i></span>Education</h3>
            {
                resume_data.education.map(item => (
                    <div key={item.id}>
                        <h5 className="role-title">
                            <span className="time-period">{item.duration}</span>
                            <span className="title-txt">{item.college}</span> 
                            <span className="employer">{item.location}</span>
                        </h5>
                        <ul className="roles-list">
                            <li>{item.description}</li>
                        </ul>
                    </div>
                ))
            }

        </>
    )
}

export default Education;
