import logo from './logo.svg';
import './App.css';


import Routers from './components/routers';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

function App() {
  return (
   
    <div className="App" id="app">

       <BrowserRouter>
     <Header></Header>
     <Routers></Routers>
     <Footer></Footer>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
