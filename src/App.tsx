import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Site from "./Site";
import ArticlesPage from "./ArticlesPage";

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
                  to="/deni2312.github.io/"
                  className="text-gray-300 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/deni2312.github.io/articles"
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
            <Route path="/deni2312.github.io/" element={<Site />} />
            <Route path="/deni2312.github.io/articles" element={<ArticlesPage />} />
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
