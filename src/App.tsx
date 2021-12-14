import { FC } from 'react'
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import NotFound from './pages/NotFound';
import EventPage from './pages/EventPage';
import EventList from './pages/EventsList';

const App: FC = () => {
  return (
<>
        <Router>

        <Navbar/>

        <article>
        <Routes>
        <Route path="/" element={<EventList/>}/>
        <Route path="/events" element={<EventList/>}/>
        <Route path="/events/:id" element={<EventPage/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
        </article>


        <Footer/>
        
        </Router>
        


</>
  )
}

export default App
