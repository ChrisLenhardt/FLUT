import './App.css';
import Post from "./post"
import Header from "./header"
import Layout from './Layout';
import Sidebar from './sidebar';
import Login from './login';
import SignUp from './signUp';
import * as React from "react";
import ReactDOM from 'react-dom/client';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route index element={
        <main>
        <Header />
        <Layout />
        <Sidebar />
        </main>
      } />
    <Route path={'/login'} element={
      <div> login </div>
    } />
    <Route path={'/signup'} element={
      <main>
        <Header/>
        <SignUp />
      </main>
    } />
    </Routes>
  );
}

export default App;