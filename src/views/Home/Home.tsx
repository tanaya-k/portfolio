import { Link } from 'react-router-dom';
import './Home.css';


function Home() {
    return (
        <>
        <div className='home title'>
            <h1 className='home title greeting'>Hi, i'm</h1>
            <h2 className='home title name'>Tanaya</h2>
            <footer>
                <Link className='home link' to='/about-me'>Click to see more...</Link>
            </footer>
        </div>
        </>
    );
}

export default Home;