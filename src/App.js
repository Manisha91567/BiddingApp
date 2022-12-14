import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';


function App() {
  return (
    <Router>
    <div className ="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home" element={<Home/>} />       
      </Routes>
    </div>
    </Router>
  );
}

export default App;