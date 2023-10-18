import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import AddStudent from './pages/AddStudent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStudent />} />
      </Routes>
    </div>
  );
}

export default App;
