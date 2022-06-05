import './App.css';
import GlobalStyles from './Themes/GlobalStyles';
import {Navbar, Notes, Schedule} from './components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <div className="app"> 
   <Router>
      <div>
        <Navbar />
        <GlobalStyles/>
      </div>
      <Routes>
        <Route path="/" element={<Notes/>}></Route>   
        <Route path="/schedule" element={<Schedule/>}></Route>
      </Routes>
      
    </Router> 
  </div>
  );
}

export default App;
