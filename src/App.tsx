import { FC } from 'react'
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import NotFound from './pages/NotFound';
import RegisterGuest from './pages/RegiterGuest';

const App: FC = () => {
  return (
<>
        <Router>

        <Navbar/>

        <article>
        <Routes>
        <Route path="/register" element={<RegisterGuest/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
        </article>
        </Router>
        
        <Footer/>


</>
  )
}

export default App
