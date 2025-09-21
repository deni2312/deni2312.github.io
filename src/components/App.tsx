import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Site from "../pages/Site";
import ArticlesPage from "../pages/ArticlesPage";
import PrismaEngine from "../articles/PrismaEngine";
import CullingPage from "../articles/Culling";
import prism from '../assets/prism.png'
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <Router>
      <Helmet>
        <link rel="icon" type="image/png" href={prism} sizes="16x16" />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="bg-gray-800 py-4">
          <nav className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-lg font-bold text-white">Beqiraj Denis</h1>
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
              path="/articles/PrismaEngine"
              element={<PrismaEngine />}
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
            © 2025 Denis Beqiraj. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}
