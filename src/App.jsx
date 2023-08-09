import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './context/Provider';
import Board from './components/Board/Board';

function App() {
  return (
   <Provider>
    <h1>Pixels Art</h1>
      <Board />
  </Provider>
  )
}

export default App
