import './App.css';
import {BrowserRouter, Routes , Route}  from 'react-router-dom'
import Home from './pages/Home/home'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}>
      </Route>
    </Routes>
    </BrowserRouter>
    )
}

export default App;
