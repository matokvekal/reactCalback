import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Callback from "./Callback";
import Localstorage from "./Localstorage";
// import Debounce from './Debounce';
// import Effect from "./Effect";

function App() {
  return (
    <>
      <h1> Select a component from the menu.</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/callback">Callback</Link>
              </li>
              <li>
                <Link to="/Localstorage">Localstorage</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/callback" element={<Callback />} />
            <Route path="/Localstorage" element={<Localstorage />} />
            {/* <Route path="/debounce" element={<Debounce />} />
                    <Route path="/effect" element={<Effect />} /> */}
            <Route path="/" element={<h1>Home</h1>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
