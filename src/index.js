import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Home } from './routes/Home';
import { Beers} from './routes/Beers';
import {  NewBeer} from './routes/NewBeer';
import { RandomBeer } from './routes/RandomBeer';
import { BeerDetail } from './routes/BeerDetail';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beers" element={<Beers />} />
      <Route path="/beers/:beerId" element={<BeerDetail />} />
      <Route path="/new-beer" element={<NewBeer />} />
      <Route path="/random-beer" element={<RandomBeer />} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
