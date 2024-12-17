import { ProjectItem } from '..';
import './Carousel.css'
import projects from "../../../data/projects.json";


function Carousel() {
    return (
        <div className='carousel container'>
            {/* {projects.map((item) => {
                return <ProjectItem title={item.title}/>
            })} */}
            {projects.map((project) => {
                return <ProjectItem 
                    title={project.title}
                    tag={project.tag}
                    description={project.description}
                    skills={project.skills} />;
            })}
            {/* <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/> */}
        </div>
    );
}

export default Carousel;