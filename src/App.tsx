import { FC } from 'react'
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import NotFound from './pages/NotFound';
import RegisterGuest from './pages/RegiterGuest';

const App: FC = () => {
  return (
    <Router>
      <Navbar/>

      <Routes>
      <Route path="/register" element={<RegisterGuest/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
