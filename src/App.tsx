import './App.css'
import { Routes, Route } from 'react-router-dom';
import { AboutMe, Home, Contact } from './views';


function App() {
    return (
        <>
        <Routes>
            <Route index path='/' element={<Home />} />
            <Route index path='/about-me' element={<AboutMe />} />
            {/* <Route path='/' element={<Project />} /> */}
            <Route index path='/contact' element={<Contact />} />
        </Routes>
        </>
    );
}

export default App;
