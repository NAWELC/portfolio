import Image from "next/image";
import IMAGE from "@src/assets/img/acs.png";
import IMAGE1 from "@src/assets/img/open.png";
import IMAGE2 from "@src/assets/img/roissy5.png";
import IMAGE4 from "@src/assets/img/ratp.png";

const parcours = () => {
    return (


<section class="text-gray-600 body-font bg-[#77A68A]  ">
    <h1 className="text-center text-black uppercase text-3xl font-medium pt-16">parcours</h1>
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <Image className="rounded-full" src={IMAGE} alt="" width={150} height={50}/>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-black mb-1 text-xl"></h2>
          <p class=" text-black leading-8" data-aos="zoom-in-left">DEVELOPPEUSE WEB ET WEB MOBILE(2022-2023)
                                                                          ACCES CODE SCHOOL, MEAUX <br /> 
                                                                          -Intégration d&apos;une maquette <br />
                                                                          -Intégration d&apos;une landing page <br />
                                                                          -Création d&apos;un portfolio <br />
                                                                          -Création d&apos;une agence web <br />
                                                                          -Création d&apos;un site bancaire <br />
                                                                          -Création d&apos;une boutique <br />
                                                                                      </p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <Image className="rounded-full" src={IMAGE1} alt="" width={110} height={110}/>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl"></h2>
          <p class=" text-black leading-8" data-aos="zoom-in-left">
                                                                            DEVELOPPEUSE WEB (2021-2022)
                                                                  OPENCLASSROOMS,ONLINE <br />
                                                                  -Initiation au code <br />
                                                                  -Initiation à l&apos;algorithmie <br />
                                                                  -Création de divers projets <br />
                                                                                                    </p>

        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <Image className="rounded-full " src={IMAGE2} alt="" />
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl"></h2>
          <p class=" text-black leading-8" data-aos="zoom-in-left"> AGENT DE PERSONNE A MOBILITE REDUITE (2018-2019)
                                                                            AÉROPORT, ROISSY CHARLES DE GAULLE <br />
                                                                            -Accueillir les passagers <br/>
                                                                            -Accompagner et assister les passagers à mobilité réduite</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
         <Image className  src={IMAGE4} alt="" width={100}  height={100}/> 
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl"></h2>
          <p class=" text-black leading-8" data-aos="zoom-in-left"> AGENT DE REGULATION (2017-2018)
                                                                            RATP,PARIS <br />
                                                                            -Aider à la fermeture des portes des trains <br />
                                                                            -Gérer la montée et la descente des passagers <br />
                                                                            -Renseigner et orienter les clients en situation normale et
                                                                            perturbée</p>
        </div>
      </div>
    </div>
  </div>
</section>

    );
};

export default parcours;