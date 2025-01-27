import Home from './Home'
import Dresses from './Dresses';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dresses' element={<Dresses />}/>
        <Route path='/about' element={<About />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
