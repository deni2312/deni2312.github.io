import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Site from "../pages/Site";
import ArticlesPage from "../pages/ArticlesPage";
import ClusteredRenderingPage from "../articles/ClusteredRendering";
import CullingPage from "../articles/Culling";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="bg-gray-800 py-4">
          <nav className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-lg font-bold text-white">My Portfolio</h1>
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/articles"
                  className="text-gray-300 hover:text-white"
                >
                  Articles
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Site />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route
              path="/articles/clustered-rendering"
              element={<ClusteredRenderingPage />}
            />
            <Route
              path="/articles/culling"
              element={<CullingPage />}
            />
            <Route path="*" element={<Site />} />
          </Routes>
        </main>

        <footer className="py-4 bg-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Denis Beqiraj. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}
