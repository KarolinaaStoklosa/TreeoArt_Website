import './App.css';
import { BrowserRouter} from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';

function App() {
  
  return (
    <div className="App bg-light scroll-smooth">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
