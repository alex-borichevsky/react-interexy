import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ButtonComponent from "./components/Button";
import Main from "./components/Main";
import {ProductPage} from "./pages/ProductPage";
import {ReduxPage} from "./pages/ReduxPage";
import Form from "./components/form/Form";

function App() {
  return (
      <Routes>
          <Route path="/main" element={<Main/>}/>
          <Route path='/products' element={<ProductPage/>}></Route>
          <Route path='/redux' element={<ReduxPage/>}></Route>
          <Route path='/form' element={<Form/>}></Route>
      </Routes>
  );
}

export default App;
