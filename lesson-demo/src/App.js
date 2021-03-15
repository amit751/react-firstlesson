import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>timer</h1>
      <p>{new Date().toLocaleString()}</p>
    </div>
  );
}

export default App;
