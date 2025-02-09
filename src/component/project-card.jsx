function ProjectCard(props){
    return <span className={props.className}>
        <h1>{props.heading}</h1>
        <img src={props.img} className="img-fluid rounded mx-auto d-block" alt=""></img>
        <h3 className="text-center">{props.title}</h3>
        <p className="proj-text ">{props.overlay}</p>
    </span>
}

export default ProjectCard;