import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import Aos from "aos";
// import { NextUIProvider } from "@nextui-org/react";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return <Component {...pageProps} />
  
};

export default MyApp;
