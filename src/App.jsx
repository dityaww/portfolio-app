import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import NotFound from "./routes/NotFound"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init(
    {once: true}
  )
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default App
