import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './context/Provider';
import Board from './components/Board/Board';
import ColorPalette from './components/ColorPalette/ColorPalette';
import BoardSizeSelector from './components/BoardSizeSelector/BoardSizeSelector';

function App() {
  return (
   <Provider>
    <h1>Pixels Art</h1>
      <ColorPalette />
      <BoardSizeSelector />
      <Board />
  </Provider>
  )
}

export default App
