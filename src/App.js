import logo from './logo.svg';
import './App.css';
import {Layout} from 'antd'
import SiteFooter from './components/SiteFooter';
import { useEffect, useState } from 'react';
import CurrentPage from './components/CurrentPage';

const { Header, Content, Footer } = Layout;

function App() {  
  return (
      <CurrentPage/>
  );
}

export default App;
