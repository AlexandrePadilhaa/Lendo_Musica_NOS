import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import PagNotFound from './PageNotFound/PageNotFound'
import SearchResult from "./SearchResult/SearchResult";
import MusicPage from './MusicPage/MusicPage'
import History from "./History/History";
import Home from './App'

function routes() {
    return(
        <Router>
        <Routes>

        <Route path='/' element = {<Home />} />
        <Route path='/notFound' element = {<PagNotFound />} />
        <Route path='/SearchResult' element = {<SearchResult />} />
        <Route path='/MusicPage' element = {<MusicPage />} />
        <Route path='/History' element = {<History />} />

        </Routes>
        </Router>
    );


}export default routes;


