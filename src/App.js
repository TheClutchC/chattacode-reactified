import './App.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import ConnectPage from './pages/ConnectPage';
import BlogPage from './pages/BlogPage';
import ProjectsPage from './pages/ProjectsPage'; 

function App() {
  return (
    <HashRouter>
      <nav>
        <NavBar />
      </nav>
      <Routes>
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/events' element={<EventsPage />} />
        <Route exact path='/connect' element={<ConnectPage />} />
        <Route exact path='/blog' element={<BlogPage />} />
        <Route exact path='/projects' element={<ProjectsPage />} />
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
