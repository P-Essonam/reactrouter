import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

      <Header />
        <Nav />
        <Link to='/post'>Newpost</Link>
        <Link to={`/post/${1}`}>PostPage</Link>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/post' element={<NewPost/>} />
          <Route path='/post/:id' element={<PostPage/>} />
          
          <Route path='/about/:id/:type' element={<About/>} />
          {/* <Route path='*' element={<Missing/>} /> */}
        </Routes>

        <Footer />
    
  </BrowserRouter>
);

