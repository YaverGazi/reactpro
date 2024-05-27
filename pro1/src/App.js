
import './App.css';
import About from './componets/About';
import Navbar from './componets/Navbar';
import Solutions from './componets/Solutions';
import Industries from './componets/Industries';
import Products from './componets/Products';
import Policy from './componets/Policy';

import Login from './componets/Login';


function App() {
  return (
    <div className="App">
    <Navbar/>
        <Login/>
       
        <Solutions/>
        <Products/>
        <Industries/>
         <About/>
         <Policy/>

    </div>
  );
}

export default App;
