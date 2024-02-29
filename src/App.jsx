import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
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



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  typography: {
    "fontFamily": `"Poppins", sans-serif`,
  }
});

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., data fetching) by using setTimeout
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a 2-second delay
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Irfan Zafri Portfolio Website</title>
        <meta property="og:title" content="Irfan Zafri" />
        <meta property="og:description" content="I'm Irfan Zafri and Welcome to My Portfolio Website 😎" />
        <meta property="og:image" content="https://imgur.com/a/LeCm5ll" />
        <meta property="og:url" content="https://irfan-zafri.netlify.app/" />
      </Helmet>
      {loading ? (
        // Show the preloader when loading is true
        <div className="preloader">
          <div className="line-left"></div>
          <div className="line-right"></div>
        </div>
      ) : (
        <div></div>
      )}
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <main>
          {/* Hero unit */}
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
