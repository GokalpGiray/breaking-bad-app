import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//pages
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/char/:char_id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
