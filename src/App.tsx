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
              <Link to="/deni2312.github.io/">Home</Link>
            </li>
            <li>
              <Link to="/deni2312.github.io/articles">About</Link>
            </li>
          </ul>
        </nav>

        {/* Use Routes and Route with the element prop */}
        <Routes>
          <Route path="/deni2312.github.io/" element={<Site />} />
          <Route path="/deni2312.github.io/articles" element={<ArticlesPage />} />
          <Route path="*" element={<Site />} />
        </Routes>
      </div>
    </Router>
  );
}