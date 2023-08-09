import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from './components/Row/Row';

function App() {
  const [boardSize, setboardSize] = useState(2);
  const pixels = Array.from({ length: boardSize });
  return (
    <main>
      <h1>Pixels art</h1>
      <div className='d-flex align-items-center justify-content-center flex-column'>
        {pixels.map((_, index) => {
          return <Row key={index} props={pixels} />
        })}
      </div>
    </main>
  )
}

export default App
