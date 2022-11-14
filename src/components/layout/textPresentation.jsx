import Image from "next/image";
import image from "@src/assets/img/boxe.png";
import IMAGE3 from "@src/assets/img/image-landing-page.png";
import IMAGE4 from "@src/assets/img/capture-ecran-cv.png";

let styles = {
  text: " text-center pl-4  ",
  paragraphe: "text-left pl-4",
  padding: "pt-8  ",
  aspect: "backdrop-blur-sm  bg-white/30",
};

const TextPresentation = () => {
  return (
    <div className={styles.text}>
      <h1>Bonjour,je suis NAWEL CHAIB </h1>
      <h1>DEVELOPPEUSE WEB FRONT-END</h1>
      <br />
      <h1>A PROPOS DE MOI</h1>
      <p className={styles.text}>
        je suis actuellement en formation de Developpeur-web web mobile a
        l'Acces Code School,je suis à la recherche d'un stage du 9 janvier au 3
        mars 2023
      </p>
      <br />
      <div className={styles.padding}>
        <h1>projets</h1>
        <br />

        <div className="flex flex-col items-center">
          <div className="rounded-lg max-w-sm border-8 mb-10 pb-4 ">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <Image className="rounded-t-lg" src={image} alt="" />
            </a>
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              wireframe
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Ce premier projet d'integration wireframe m'a permis de me
              familiariser avec les langages HTML et CSS ,ainsi que l 'editeur
              VS CODE le serveur FTP et GITHUB
            </p>
            <a href="https://priscad.promo-171.codeur.online/landing-page/">
              <button
                type="button"
                class="inline-block px-6 py-2.5   bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Visitez
              </button>
            </a>
          </div>

          <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-white max-w-sm border-8  mb-10 ">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <Image
                  classname="object-cover"
                  src={IMAGE3}
                  alt=""
                  width={368}
                  height={132}
                />
              </a>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  landing-page
                </h5>
                <p class="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="http://public/landingpage/">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    visitez
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg max-w-sm border-8">
              <a href="#!">
                <Image className="rounded-t-lg" src={IMAGE4} alt="" />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">CV</h5>
                <p className="text-gray-700 text-base mb-4 ">
                  J'ai codé mon cv en vanilla ,j'ai utilisé seulement HTML et
                  CSS
                </p>
                <a href="https://nawelc-cv.netlify.app/">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    visitez
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div class="flex justify-center mt-10 ">
            <div class="rounded-lg shadow-lg bg-white max-w-sm border-8">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded-t-lg"
              src="https://mdbootstrap.com/img/new/standard/nature/182.jpg " 
                  alt="" 
                  width={368} 
                  height={132}
                />
              </a>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  Card title
                </h5>
                <p class="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextPresentation;
