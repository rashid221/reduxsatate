import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Navbars from './Navbars';
import Shop from './Shop';
import Cart from './Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    
   <BrowserRouter>
    <Navbars/>
      <Routes>
        <Route path="/" element={<Shop/>}> </Route>
        <Route path="/cart" element={<Cart/>}> </Route>
        </Routes>    
    </BrowserRouter>
     {/* <Main/>
   <AmazeSection/>
   <PlacesSection/>
   <Popular/> */}
   </>
  );
}

export default App;
