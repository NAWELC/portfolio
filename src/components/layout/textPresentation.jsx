import Image from "next/image";
import image from "@src/assets/img/boxe.png";
import IMAGE3 from "@src/assets/img/image-landing-page2.png";
import IMAGE4 from "@src/assets/img/capture-ecran-cv.png";
import image5 from "@src/assets/img/agence-eclair.png";

let styles = {
  text: " text-center px-8 ",
  paragraphe: "text-left pl-4",
  padding: "pt-8",
  aspect: "backdrop-blur-sm bg-white/30",
};

const TextPresentation = () => {
  return (
    <div className={styles.text}>
      <h1 className="font-Berkshire_Swash">Bonjour,je suis NAWEL CHAIB </h1>
      <h1 className="font-Berkshire_Swash">DEVELOPPEUSE WEB FRONT-END</h1>
      <br />
      <h1>A PROPOS DE MOI</h1>
      <p className="font-Berkshire_Swash">
        je suis actuellement en formation de Developpeur-web web mobile a
        l&apos;Acces Code School,je suis à la recherche d&apos;un stage du 9
        janvier au 3 mars 2023
      </p>
      <br />
      <div className={styles.padding}>
        <h1>projets</h1>
        <br />

        <div className="flex flex-col lg:flex-row items-center ">
          <div
            className=" max-w-sm border-8 lg:mx-8 mb-10 pb-4 rounded-lg bg-white"
            data-aos="zoom-in-up"
          >
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <Image className="" src={image} alt="" />
            </a>
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              wireframe
            </h5>
            <p className="text-gray-700 text-base mb-4 mx-8 font-Berkshire_Swash">
              Ce premier projet d&apos;integration wireframe m&apos;a permis de
              me familiariser avec les langages HTML et CSS ,ainsi que
              l&apos;editeur VS CODE le serveur FTP et GITHUB
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

          <div class="flex flex-col items-center h-96" data-aos="zoom-in-up">
            <div
              class="  max-w-sm border-8 lg:mx-8 mb-10  rounded-lg"
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <Image
                  classname=""
                  src={IMAGE3}
                  alt=""
                  width={368}
                  height={132}
                />
              </a>

              <div class="p-12 bg-white ">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  landing-page
                </h5>
                <p class="text-gray-700 text-base mb-4 font-Berkshire_Swash">
                  J&apos;ai réalisé ce projet avec Boostrap
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

          <div
            className="flex justify-center lg:mx-8 bg-white rounded-lg h-96 mt-8"
            data-aos="zoom-in-up"
          >
            <div className="rounded-lg shadow-lg bg-white max-w-sm border-8 lg:-mt-6">
              <a href="#">
                <Image src={IMAGE4} alt="" />
              </a>
              <div className="p-12">
                <h5 className="text-gray-900 text-xl font-medium mb-2">CV</h5>
                <p className="text-gray-700 text-base mb-4 font-Berkshire_Swash">
                  J&apos;ai codé mon cv en vanilla ,j&apos;ai utilisé seulement
                  HTML et CSS 
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

          <div
            class="flex justify-center mt-12  lg:mx-8 border-8 bg-white rounded-lg"
            data-aos="zoom-in-up"
          >
            <div class=" max-w-sm lg:border-2 rounded-lg h-96 ">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <Image
                  class=""
                  src={image5}
                  alt=""
                  />
              </a>
              <div class="p-12 ">
                <h5 class="text-gray-900 text-xl font-medium mb-2 ">
                  Agence-Eclair
                </h5>
                <p class="text-gray-700 text-base mb-4 font-Berkshire_Swash">
                  ce projet a été réalisé en groupe afin de créer une agence web
                </p>
                <a href="https://agence-eclair.netlify.app/">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadowz-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    visitez
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextPresentation;
