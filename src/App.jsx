import { useState } from 'react';
import Navbar from './Navbar'
import Book from './Book';
import Footer from './footer';
import About from './About';

function App() {
  const [showComponents, setShowComponents] = useState(true);

  const handleToggle = () => {
    setShowComponents(!showComponents);
  };

  return (
    <>
      <Navbar onToggle={handleToggle} />
      {showComponents ? (
        <>
          <Book />
          <Footer />
        </>
      ) : (
        <About />
      )}
    </>
  );
}

export default App;
