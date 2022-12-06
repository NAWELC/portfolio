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

const TextPresentation = () => {
  return (
    <div className={styles.text} >
      <h1 className="font-Anton text-2xl uppercase pb-6"></h1>
      <p className="font-Berkshire_Swash text-center mx-80 p-4 leading-8">
        Je suis actuellement en formation de Developpeur-web web mobile a
        l&apos;Acces Code School,je suis à la recherche d&apos;un stage du 9
        janvier au 3 mars 2023. En reconversion professionnelle ,je suis
        passionnée par l&apos;informatique depuis toujours. Ce que j'aime dans ce
        métier ,c&apos;est le coté créatif et travailler sur des projets nouveaux
        afin d&apos;enrichir mes connaissances et évoluer dans ce domaine et donner
        le meilleur de moi-même .
      </p>
      
      <div className={styles.padding}>
        <h1 className="font-Anton text-xl lg:text-2xl uppercase pb-12">PROJETS</h1>
        <div className="lg:grid grid-cols-4 pt-8">
          <div className="h-150 border-8 pb-8 mx-4" data-aos="flip-left">
            <Image className="" src={image} alt="" />
            <h5 className="text-gray-900 text-xl font-medium py-8">
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
                class="inline-block px-6 py-2.5   bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Visitez
              </button>
            </a>
          </div>
          <div className="h-100 border-8 mx-4 " data-aos="flip-left">
            <Image className height={670} src={IMAGE3} alt="" />
            <h5 className="text-gray-900 text-xl font-medium py-8 ">
              LANDING-PAGE
            </h5>
            <p className="text-gray-700 text-base mb-4 mx-8 font-Berkshire_Swash">
              j&apos;ai réalisé ce projet avec boostrap qui s&apos;adapteà la
              taille de l&apos;écran voulu je l&apos;ai réalisé en format mobile
              et desktop J&apos;ai utilisé Github,VS CODE et le serveur
              filezilla
            </p>
            <a href="http://public/landingpage/">
              <button
                type="button"
                class="inline-block px-6 py-2.5   bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Visitez
              </button>
            </a>
          </div>
          <div className="h-100 border-8 mx-4"data-aos="flip-left">
            <Image className height={790} src={IMAGE4} alt="" />
            <h5 className="text-gray-900 text-xl font-medium py-8">CV</h5>
            <p className="text-gray-700 text-base mb-4 mx-8 font-Berkshire_Swash">
              j&apos;ai réalisé mon CV avec les langages de programmation HTML
              et CSS et Vanilla qui est un langage de programmation basé sur du
              texte à la fois côté serveur et client,j'ai aussi utilisé Github
            </p>
            <a href="https://nawelc-cv.netlify.app/">
              <button
                type="button"
                class="inline-block px-6 py-2.5   bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Visitez
              </button>
            </a>
          </div>
          <div className="h-100 border-8 mx-4" data-aos="flip-left">
            <Image className height={840} src={image5} alt="" />
            <h5 className="text-gray-900 text-xl font-medium py-8">
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
                class="inline-block px-6 py-2.5   bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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

export default TextPresentation;
