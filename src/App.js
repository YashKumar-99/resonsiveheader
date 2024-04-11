import './App.css';



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/header';
// import Footer from './components/footer';
import TabComp from './components/Tab';

//Pages import 


import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Error from './pages/Error';


function App() {
  return (

    <BrowserRouter>
      {/* <Navbar /> */}
      <Header />


      <div className='fullpageSection'>

        <div className='page-container'>

          <Routes>

            <Route path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='*' element={<Error />} />

          </Routes>
        </div>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>

  );
}

export default App;
