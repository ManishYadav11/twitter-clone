
import './App.css';
import PathRouter from './components/PathRouter';
import { Toaster } from 'react-hot-toast'; // Correct import

function App() {
  return (
    <div className="App">
      <PathRouter/>
      <Toaster />
    </div>
  );
}

export default App;
