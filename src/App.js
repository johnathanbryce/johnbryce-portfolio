
import './App.css';

// Pages
import Home from './pages/Home/Home';
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
