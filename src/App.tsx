import './App.css'
import { Routes, Route } from 'react-router-dom';
import { AboutMe, Home, Contact, Projects, Resume } from './views';


function App() {
    return (
        <>
        <Routes>
            <Route index path='/' element={<Home />} />
            <Route index path='/about-me' element={<AboutMe />} />
            <Route path='/projects' element={<Projects />} />
            <Route index path='/contact' element={<Contact />} />
            <Route index path='/resume' element={<Resume />} />
        </Routes>
        </>
    );
}

export default App;
