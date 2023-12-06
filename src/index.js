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
import Incomelayout from './Incomelayout';


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
              <Route path='income/:id' element={<Incomelayout/>}>
                  <Route index element={<><h2>detail incom</h2><Link to='..' relative='path'>Back to icome page</Link></>} />
                  <Route path='boss' element={<h1>Je suis le boss</h1>} />
              </Route>
            </Route>
            
            <Route path='/about/:id/:type' element={<About/>} />

            
      </Route>
    </Routes> 

          
        
    
  </BrowserRouter>
);


/*

on utilise useOutletContext quon va placer dans chaque composer
et dans le outlet context={{}} on passe les valeurs qu'on veut afficher sur 
chaque page.  dans chaque page pon passe const { var } = outletContext et on
recupere la donnee voule 
 */