
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='movie/:id' element={<h1>Movie details page</h1>}/>
          <Route path='movies/:type' element={<h1>Movie types</h1>} />
          <Route path='/*' element={<h1>error page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
