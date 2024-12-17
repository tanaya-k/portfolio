import './ProjectItem.css';

type ProjectProps = {
    title: string;
    tag: string;
    description: string;
    skills: string[];
}

function ProjectItem({title, tag, description, skills}: ProjectProps): JSX.Element {
    return (
        <div className='project-item container'>
            <div className='project-item title'>
                <h2 className='project-item title name'>{title}</h2>
                <h2 className='project-item title type'>{tag}</h2>
            </div>
            <div className='project-item desc'>
                <p className='project-item text'>
                    {description}
                </p>
            </div>
            <div className='project-item details'>
                {/* <div className='project-item tech'>
                    <ul className='project-item list'>Tech Used
                        <li>Tech 1</li>
                        <li>Tech 2</li>
                        <li>Tech 3</li>
                    </ul>
                </div> */}
                <div className='project-item skills'>
                    {/* chnage this into tag markers instead */}
                    {/* <ul className='project-item list'>Skills Used
                        {skills.map((skill) => {
                            return <li>{skill}</li>;
                        })}
                    </ul> */}
                    <div className='project-item list'>
                        {skills.map((skill) => {
                            return <div className='project-item list skill'>
                                {skill}
                            </div>;
                        })}
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default ProjectItem;