import './App.css';
import Header from './components/Header/Header';
import {Routes,Route} from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About';
import Work from './components/Work/Work';
import Resume from './components/Resume/Resume';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/work' element={<Work/>} />
            <Route path='/skill' element={<Skills/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/resume' element={<Resume/>} />
        </Routes>

    </div>
  );
}

export default App;
