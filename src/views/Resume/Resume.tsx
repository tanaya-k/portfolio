import './Resume.css';
import { NavBar } from '../../components';

function Resume() {
    return <div>
        <NavBar />
        <object className='resume' data='../../data/Tanaya-Kaundal-FlowCV-Resume-20241217.pdf' type="application/pdf"></object>
    </div>;
}


export default Resume;