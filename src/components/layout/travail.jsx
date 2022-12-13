import Image from "next/image";
import IMAGE from "@src/assets/img/css.image.png";
import IMAGE3 from "@src/assets/img/html5.png";
import IMAGE4 from "@src/assets/img/javascript.png";
import IMAGE5 from "@src/assets/img/react.png";
import IMAGE6 from "@src/assets/img/node.JS2.png";
import IMAGE7 from "@src/assets/img/tailwind.png";
import IMAGE8 from "@src/assets/img/github.png";
import IMAGE9 from "@src/assets/img/gitblack.png";
import IMAGE10 from "@src/assets/img/terminal.png";

const Travail = () => {
  return (
    <section id="competences" class="text-gray-600 body-font  bg-[#EFF2D3]">
      <a href="#competences" aria-hidden="true"></a>
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap w-full pt-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-Anton underline">
            COMPETENCES
          </h1>
        </div>
        <div className="flex flex-wrap py-28">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div
              className="border-4 border-black p-4 rounded-lg pb-1"
              data-aos="flip-up"data-aos-once="false"
            >
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                <Image className height={120} width={100} src={IMAGE} alt="" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2 font-Berkshire_Swash">
                CSS
              </h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div
              className="border-4 border-black p-4 rounded-lg pb-1"
              data-aos="flip-up"data-aos-once="false"
            >
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                <Image className height={120} width={100} src={IMAGE3} alt="" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2 font-Berkshire_Swash">
                HTML
              </h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div
              className="border-4 border-black p-4 rounded-lg pb-1"
              data-aos="flip-up"data-aos-once="false"
            >
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                <Image className height={120} width={100} src={IMAGE4} />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2 font-Berkshire_Swash">
                JAVASCRIPT
              </h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div
              className="border-4 border-black p-4 rounded-lg pb-1"
              data-aos="flip-up"data-aos-once="false"
            >
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                <Image className="" src={IMAGE5} alt="" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2 font-Berkshire_Swash">
                REACT
              </h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div
              className="border-4 border-black p-4 rounded-lg pb-1"
              data-aos="flip-up"data-aos-once="false"
            >
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                <Image className height={120} width={100} src={IMAGE6} alt="" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2 font-Berkshire_Swash">
                NODEJS
              </h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div
              className="border-4 border-black p-4 rounded-lg pb-1"
              data-aos="flip-up"data-aos-once="false"
            >
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <Image src={IMAGE7} alt="" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2 font-Berkshire_Swash">
                TAILWIND
              </h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4 ">
            <div
              className="border-4 border-black p-4 rounded-lg pb-1"
              data-aos="flip-up"data-aos-once="false"
            >
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 ">
                <Image src={IMAGE8} alt="" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2 font-Berkshire_Swash">
                GITHUB
              </h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4 ">
            <div
              className="border-4 border-black p-4 rounded-lg pb-1"
              data-aos="flip-up"data-aos-once="false"
            >
              <div className="w-10 h-10 inline-flex items-center justify-center text-indigo-500 ">
                <Image src={IMAGE9} alt="" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2 font-Berkshire_Swash">
                GIT
              </h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4 ">
            <div
              className="border-4 border-black p-4 rounded-lg pb-1"
              data-aos="flip-up"data-aos-once="false"
            >
              <div className="w-10 h-10 inline-flex items-center justify-center text-indigo-500 ">
                <Image src={IMAGE10} alt="" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2 font-Berkshire_Swash">
                TERMINAL DE COMMANDE
              </h2>
              <p className="leading-relaxed text-base"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travail;
