import { Body, Details } from './components';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/item/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
