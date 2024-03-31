
import './App.css'
import './about.css'
import './components/Testymonials.css'
import './components/RecipesProducts.css'
import './components/Contact.css'
import './responsive.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/Header';
import About from './components/About';
import Recipes from './components/Recipes';
import Testymonials from './components/Testymonials';
import Contact from './components/Contact'

function App() {
  return (
   
      <div className='container-fluid'>
        <Header />
        <About />
        <Recipes />
        <Testymonials />
        <Contact/>
   </div>
  );
}

export default App;
