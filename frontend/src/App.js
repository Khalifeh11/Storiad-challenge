import Landing from './pages/Landing/Landing';
import Book from './pages/Book/Book';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/book" element={<Book/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
