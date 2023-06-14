
import './App.css'
//import axios from 'axios'
import { Routes, Route } from "react-router-dom";
//import Sgin from './componet/sgin'
import Youtub from './componet/youtub'
import Sgin1 from './componet/sign1';
import Sedi from './componet/sidebar';
function App() {
 // const [count, setCount] = useState(0)

  return (
   <>
   <Routes>
        <Route path="/" element={<Sgin1 />}>
        </Route>
        <Route path="/yut" element={<Youtub/>}></Route>
        <Route path="/s" element={<Sedi/>}></Route>
      </Routes>
   </>
  )
}

export default App
