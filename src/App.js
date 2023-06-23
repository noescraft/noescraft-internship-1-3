import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Home } from './pages/Home'
import { Article } from './pages/Article'
import { ListElement } from './components/ListElement';
import { ArticlesList } from './components/ArticlesList';
import { SingleArticle } from './components/SingleArticle';



const App = () => (

    <BrowserRouter>
        <Navbar />
        <ListElement />
        <ArticlesList/>
        <SingleArticle/>
        
        
        <div className="container-fluid p-0 h-100">
            <Routes>
                <Route exact path="/" component={Home} />
                <Route exact path="/Article" component={Article} />
            </Routes>
        </div>
    </BrowserRouter>

);

export default App;