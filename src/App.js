import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Project from './components/pages/Project'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />  
            <Route path="/newproject" element={<NewProject />} />  
            <Route path="/project/:id" element={<Project />} />  
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
