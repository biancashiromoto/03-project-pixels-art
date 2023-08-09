import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './context/Provider';
import ColorPalette from './components/ColorPalette/ColorPalette';

function App() {
  return (
   <Provider>
    <h1>Pixels Art</h1>
      <ColorPalette />
  </Provider>
  )
}

export default App
