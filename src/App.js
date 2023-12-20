import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home';


function App() {
  return (
    <div>
      <CustomNavbar testoAddizionale="Il nostro risorante epico!"/> 
      <Home />
     
    </div>
  );
}

export default App;
