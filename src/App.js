import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom'
import Home from './screen/Home'
import About from './screen/About'
import Services from './screen/Services'
import Contact from './screen/Contact'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <div className={styles.App}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
