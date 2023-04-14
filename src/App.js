import './App.css';
import Main from './Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import AmazeSection from './AmazeSection';
import PlacesSection from './PlacesSection';
import Popular from './Popular';
import Navbars from './Navbars';
import Shop from './Shop';



function App() {
  return (
    <>
    <Navbars/>
    <div className='container'>
    <Shop/>
    </div>
     {/* <Main/>
   <AmazeSection/>
   <PlacesSection/>
   <Popular/> */}
   </>
  );
}

export default App;
