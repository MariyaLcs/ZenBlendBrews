import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import PageNotFound from "./components/PageNotFound";
import RecipesPage from "./components/RecipesPage";
import Header from './components/Header';
import ManageArticlePage from "./components/ManageArticlePage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/recipe/:slug" element={<ManageArticlePage/>}/>
            <Route path="/recipe" element={<ManageArticlePage/>}/>
            <Route path="*" element={<PageNotFound />} />
           
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
