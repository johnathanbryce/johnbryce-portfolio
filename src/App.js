
import './App.css';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import NotFound from './components/PageNotFound/PageNotFound';

// External Packages     
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
  );
}

export default App;
