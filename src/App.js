
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { pathsandelements } from './config/PathsAndElements';

function App() {
  
  const navs = createHashRouter(pathsandelements);
  return (
    <div className="App">
      <RouterProvider router={navs}/>
    </div>
  );
}

export default App;
