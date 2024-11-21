import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Site from "./Site";
import ArticlesPage from "./ArticlesPage";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/articles">About</Link>
            </li>
          </ul>
        </nav>

        {/* Use Routes and Route with the element prop */}
        <Routes>
          <Route path="/home" element={<Site />} />
          <Route path="/articles" element={<ArticlesPage />} />
        </Routes>
      </div>
    </Router>
  );
}