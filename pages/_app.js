import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import Aos from "aos";
import ParticleTest from "@src/components/particle";
// import { NextUIProvider } from "@nextui-org/react";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    
  }, []);
  <ParticleTest />
  return <Component {...pageProps} />
  
};

export default MyApp;
