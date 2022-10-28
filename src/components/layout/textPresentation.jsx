import Image from "next/image";
import image from "@src/assets/img/boxe.png";

let styles = {
    text:" text-center pl-4 bg-slate-200 ",
    paragraphe:"text-left pl-4",
    padding:"pt-8"

};

const TextPresentation = () => {
  return (
    <>
      <div className = {styles.text}>
        <h1>Bonjour,je suis NAWEL CHAIB </h1>
        <h1>DEVELOPPEUSE WEB FRONT-END</h1><br />
        <h1>A PROPOS DE MOI</h1>
        <p className={styles.text}>je suis actuellement en formation de Developpeur-web web mobile a l'Acces Code School,je suis à la recherche d'un stage
          du 9 janvier au 3 mars 2023
        </p><br />
        <div className={styles.padding} >
          <h1>projets</h1><br />
          <div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <Image class="rounded-t-lg" src={image} alt="" />
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <a href="https://priscad.promo-171.codeur.online/landing-page/"><button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Visitez</button></a>
      
    </div>
  </div>
</div>


        </div>
        
        </div>
    </>
  );
};

export default TextPresentation;
