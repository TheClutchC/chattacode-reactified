import React from 'react';
import './App.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import ConnectPage from './pages/ConnectPage';
import BlogPage from './pages/BlogPage';
import ProjectsPage from './pages/ProjectsPage'; 

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    
    <HashRouter>
      {/* This <p> tag may not be necessary */}
      {/* <p style={{ backgroundColor: "orange" }}>{!data ? "Loading..." : data}</p>   */}
      <nav>
        <NavBar />
        <Header />
      </nav>
      <Routes>
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/events' element={<EventsPage />} />
        <Route exact path='/connect' element={<ConnectPage />} />
        <Route exact path='/blog' element={<BlogPage />} />
        <Route exact path='/projects' element={<ProjectsPage />} />
        <Route exact path='/' element={<HomePage />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </HashRouter>
  );
}

export default App;
