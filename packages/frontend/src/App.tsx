import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Aircraft from './pages/Aircraft';
import Team from './pages/Team';
import Careers from './pages/Careers';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aircraft" element={<Aircraft />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;