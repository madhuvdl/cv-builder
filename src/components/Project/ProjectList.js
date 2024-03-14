const ProjectList = ({project}) => {
    console.log('project ', project);
    return (
        <div className="project-data" key={project.id}>
            <h4 className="rt-mn-sub-title pj-title"><strong className=""># {project.name}</strong> <span className="pj-duration">{project.duration}</span></h4>
            <div className="pj-details">
                <h4 className="rt-mn-sub-title">Client: <span className="pj-name">{project.client}</span></h4>
                <h4 className="rt-mn-sub-title">Technology: <span className="pj-name">{project.client}</span></h4>
            </div>
        </div>
    )
}

export default ProjectList;
