import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

//pages
import Home from './pages/Home';
import Detail from './pages/Detail';
import Quotes from './pages/Quotes';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/char/:char_id" element={<Detail />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
