import "./css/App.css"
import MovieCard from "./components/MovieCard";
import { Routes, Route, RouterProvider } from "react-router-dom";

import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Navbar from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>

      </main>
    </MovieProvider>
  )
}


export default App;
