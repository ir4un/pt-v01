import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css'
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Edu from './components/Edu';
import Divider from './components/Divider';
import About from './components/About';
import Exp from './components/Exp';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({

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
    <>
      <div>
        {loading ? (
          // Show the preloader when loading is true
          <div className="preloader">
            <div className="line-left"></div>
            <div className="line-right"></div>
          </div>
        ) : (
          // Show the main content when loading is false
          <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <main>
              {/* Hero unit */}
              <Intro />
              <Divider />
              <About />
              <Edu />
              <Exp />
            </main>
            <Footer />
          </ThemeProvider>
        )}
      </div>
    </>
  )
}

export default App
