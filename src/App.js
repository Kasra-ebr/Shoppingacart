
import './App.css';

import Navigation from "./react";
import {BrowserRouter as router, Switch, Route, link} from "react-router-dom";

 

function App() {
  return (
    <div >
    <CartProviders>
        <Routes>
            <Route to="/" element={< Navigation />} /> 
            <Route to="/cart" element={< CartPage />} /> 
        </Routes>
       
    </CartProviders>
      
    </div>
  );
}

export default App;
