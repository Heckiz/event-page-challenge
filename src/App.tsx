import { FC } from 'react'
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import NotFound from './pages/NotFound';
import RegisterGuest from './pages/RegiterGuest';

const App: FC = () => {
  return (
    <Router>
      <Navbar/>

        <article className='container'>
        <Routes>

        <Route path="/register" element={<RegisterGuest/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>

        </article>
    </Router>
  )
}

export default App
