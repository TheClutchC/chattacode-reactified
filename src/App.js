import './App.scss';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import ConnectPage from './pages/ConnectPage';
import BlogPage from './pages/BlogPage';
import ProjectsPage from './pages/ProjectsPage'; 

function App() {
  return (
      <div className="App">
        <NavBar />
        <div>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/events' element={<EventsPage />} />
            <Route path='/connect' element={<ConnectPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
