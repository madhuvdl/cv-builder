const PersonalInfo = (props) => {
    console.log('pInfo ', props.pinfo)
    return (
        <>
            <h3 className="rt-mn-title"><span className="title-icon"><i className="bi bi-person"></i></span> Personal Info</h3>
            <div className="rt-cont">
                {props.pinfo.map(item => (
                    <div key={item.id}>
                        <h4 className="rt-mn-sub-title">{item.title}</h4>
                        <p className="rt-info">{item.value}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PersonalInfo;
