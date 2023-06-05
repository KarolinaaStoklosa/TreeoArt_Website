import './App.css';
import { BrowserRouter} from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import CookieBanner from './components/CookieBanner/CookieBanner'; // Importuj komponent z plikami cookies

function App() {
  
  return (
    <div className="App bg-light scroll-smooth">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>

      <CookieBanner /> 
      
    </div>
  );
}

export default App;
