import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { motion } from "framer-motion";


import './App.css'
import Intro from './components/Intro';
import Edu from './components/Edu';
import Divider from './components/Divider';
import About from './components/About';
import Exp from './components/Exp';
import Stack from './components/Stack';
import Project from './components/Project';
import Contact from './components/Contact';
import Activities from './components/Activities';
import Footer from './components/Footer';

const defaultTheme = createTheme({
  typography: {
    "fontFamily": `"Poppins", sans-serif`,
  }
});

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a 2-second delay
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="preloader">
          <div className="star-container"></div>
          <div id="stars-v2"></div>
          <div id="stars2-v2"></div>
          <div id="stars3-v2"></div>
          <motion.div
            className='load-container'>
            <div className="load-message">
              <p>#</p><h1>4</h1>
            </div>
          </motion.div>
          <div className="cube-container">
            <div className="cube">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="line-left"></div>
          <div className="line-right"></div>
        </div>
      ) : (
        <div></div>
      )}
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <main>
          <Intro />
          <Divider />
          <About />
          <Edu />
          <Exp />
          <Stack />
          <Project />
          <Activities />
          <Contact />
          <Footer />
        </main>
      </ThemeProvider>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
    </div>
  )
}

export default App
