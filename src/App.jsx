import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProductList from './components/productList/ProductList'
import Contact from './components/contact/Contact';

import { ThemeContext } from "./context";
import { useContext } from "react";
function App() {
  

  return (
    <div 
    
    >
      
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
