import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import CharactersList from './Components/CharactersList';
import Pagination from './Components/Pagination2';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/list" element={<CharactersList />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<p>This is not a valid route</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
