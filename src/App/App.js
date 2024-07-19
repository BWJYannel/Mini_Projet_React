import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Main from '../pages/Main';
import Add from '../pages/Add';
import Update from '../pages/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Main/>}/>
          <Route path="/Main" element={<Main/>}/>
          <Route path="/Add" element={<Add/>}/>
          <Route path="/Update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
