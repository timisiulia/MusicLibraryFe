import React from 'react';
import logo from './logo.svg';
import './App.css';
import img1 from "./images/image1.jpg"
import { RightSide } from './components/right-side/RightSide';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './components/main-page/MainPage';
import { AlbumPage } from './components/album-page/AlbumPage';

function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/albums/:artistName" element={<AlbumPage/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
