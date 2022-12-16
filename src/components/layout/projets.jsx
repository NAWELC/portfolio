import Image from "next/image";
import image from "@src/assets/img/boxe.png";
import IMAGE3 from "@src/assets/img/image-landing-page2.png";
import IMAGE4 from "@src/assets/img/capture-ecran-cv.png";
import image5 from "@src/assets/img/agence-eclair.png";

let styles = {
  text: " text-center  px-8 pt-10 bg-[#A1A677] ",
  paragraphe: "text-left pl-4",
  padding: "pt-8",
  aspect: "backdrop-blur-sm ",
};

const Projets = () => {
  return (
    <div id="projets" className={styles.text}>
      <div className={styles.padding}>
        <h1
          href="#projets"
          className="font-Anton underline text-xl lg:text-3xl uppercase pt-20"
        >
          PROJETS
        </h1>
        <div className="lg:grid grid-cols-4 py-24">
          <div className="h-150 border-8 pb-8 mx-4 mb-6 " data-aos="flip-left"data-aos-once="false">
            <Image className="" src={image} alt="" />
            <h5 className="text-gray-900 text-xl font-medium py-8 font-Anton">
              WIREFRAME
            </h5>
            <p className="text-gray-700 text-base mb-4 mx-8 font-Berkshire_Swash">
              Ce premier projet d&apos;integration wireframe fait à 2 m&apos; a
              permis de me familiariser avec les langages HTML et CSS ,ainsi que
              l&apos;editeur VS CODE le serveur FTP et GITHUB
            </p>
            <a href="https://priscad.promo-171.codeur.online/landing-page/">
              <button
                type="button"
                className="inline-block px-6 py-2.5   bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Visitez
              </button>
            </a>
          </div>
          <div className="h-100 border-8 mx-4 mb-6 " data-aos="flip-left"data-aos-once="false">
            <Image className height={670} src={IMAGE3} alt="" />
            <h5 className="text-gray-900 text-xl font-medium py-8 font-Anton">
              LANDING-PAGE
            </h5>
            <p className="text-gray-700 text-base mb-4 mx-8 font-Berkshire_Swash">
              j&apos;ai réalisé ce projet avec boostrap qui s&apos;adapte à la
              taille de l&apos;écran voulu je l&apos;ai réalisé en format mobile
              et desktop J&apos;ai utilisé Github,VS CODE et le serveur
              filezilla
            </p>
            <a href="http://public/landingpage/">
              <button
                type="button"
                className="inline-block px-6 py-2.5   bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Visitez
              </button>
            </a>
          </div>
          <div className="h-100 border-8 mx-4 mb-6" data-aos="flip-left"data-aos-once="false">
            <Image className height={790} src={IMAGE4} alt="" />
            <h5 className="text-gray-900 text-xl font-medium py-8 font-Anton">
              CV
            </h5>
            <p className="text-gray-700 text-base mb-4 mx-8 font-Berkshire_Swash">
              j&apos;ai réalisé mon CV avec les langages de programmation HTML
              et CSS et Vanilla qui est un langage de programmation basé sur du
              texte à la fois côté serveur et client,j&apos;ai aussi utilisé
              Github
            </p>
            <a href="https://nawelc-cv.netlify.app/">
              <button
                type="button"
                class="inline-block px-6 py-2.5   bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Visitez
              </button>
            </a>
          </div>
          <div className="h-100 border-8 mx-4 mb-6" data-aos="flip-left"data-aos-once="false">
            <Image className height={840} src={image5} alt="" />
            <h5 className="text-gray-900 text-xl font-medium py-8 font-Anton">
              AGENCE-ECLAIR
            </h5>
            <p className="text-gray-700 text-base mb-4 mx-8 font-Berkshire_Swash">
              Ce projet a été réalisé en groupe,nous devions créer le site
              d&apos;une agence web qui est une société spécialisée dans la
              conception,le développement et la gestion de sites web.
            </p>
            <a href="https://agence-eclair.netlify.app/">
              <button
                type="button"
                className="inline-block px-6 py-2.5   bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Visitez
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projets;
