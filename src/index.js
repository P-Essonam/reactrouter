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
import Layout from './Layout';
import Host from './host';
import Income from './Income';
import Dashboard from './Dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      <Route path='/' element={<Layout/>}>
            <Route index element={<App/>} />

            <Route path='post' element={< Host/>}>
              <Route index element={<Dashboard/>} />
              <Route path=':id' element={<PostPage/>} />
              <Route path='income' element={<Income/>} />
            </Route>
            
            <Route path='/about/:id/:type' element={<About/>} />

            
      </Route>
    </Routes> 

          
        
    
  </BrowserRouter>
);

