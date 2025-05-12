import HeroSection from './components/HeroSection';
import FeaturedSection from './components/FeaturedSection';
import BlogSection from './components/BlogSection';
import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";  

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : 
    <>
      <HeroSection /> 
      <FeaturedSection />
      <BlogSection />
    </>;
}

export default App
