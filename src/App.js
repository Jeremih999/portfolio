import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Home from './Pages/Home';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
     </BrowserRouter>
    </>
  );
}


export default App;
