import ProjectList from "./ProjectList";

const Project = ({pjdata}) => {
    console.log('pjdata ', pjdata)
    return (
        <div className="projects">
            {/* <div className="page-break" /> */}
            <h3 className="rt-mn-title"><span className="title-icon"><i className="bi bi-diagram-2"></i></span>Projects</h3>
            {pjdata.map(project => (
                <ProjectList project={project}/>
            ))}
        </div>
    )
}

export default Project;

