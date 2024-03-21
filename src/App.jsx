import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import All from './All';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';
import Topbar from './Topbar';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";


function App() {
  

  return (
    <>
          <Router>
      <div className="container">
        <Topbar /> 
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/FullStackDevelopment" element={<FullStackDevelopment />} />
          <Route path="/DataScience" element={<DataScience />} />
          <Route path="/CyberSecurity" element={<CyberSecurity />} />
          <Route path="/Career" element={<Career />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
