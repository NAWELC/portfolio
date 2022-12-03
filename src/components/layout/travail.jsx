import Image from "next/image";
import IMAGE from "@src/assets/img/css.image.png";
import IMAGE3 from "@src/assets/img/html5.png";
import IMAGE4 from "@src/assets/img/javascript.png";
import IMAGE5 from "@src/assets/img/react.png";
import IMAGE6 from "@src/assets/img/nodejs.png";
import IMAGE7 from "@src/assets/img/tailwind.png";
import IMAGE8 from "@src/assets/img/github.png";
import IMAGE9 from "@src/assets/img/gitblack.png";
import IMAGE10 from "@src/assets/img/terminal.png";

const Travail = () => {
  return (
    <section class="text-gray-600 body-font bg-violet-600">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            COMPETENCES
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-4 rounded-lg pb-1">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                <Image className height={120} width={100} src={IMAGE} alt="" />
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                CSS
              </h2>
              <p class="leading-relaxed text-base"></p>
            </div>
          </div>

          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-4 rounded-lg pb-1">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                <Image className height={120} width={100} src={IMAGE3} alt="" />
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                HTML
              </h2>
              <p class="leading-relaxed text-base"></p>
            </div>
          </div>

          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-4 rounded-lg pb-1">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                <Image className height={120} width={100} src={IMAGE4} />
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                JAVASCRIPT
              </h2>
              <p class="leading-relaxed text-base"></p>
            </div>
          </div>

          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-4 rounded-lg pb-1">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                <Image className="" src={IMAGE5} alt="" />
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                REACT
              </h2>
              <p class="leading-relaxed text-base"></p>
            </div>
          </div>

          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-4 rounded-lg pb-1">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                <Image className height={120} width={100} src={IMAGE6} alt="" />
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                NODEJS
              </h2>
              <p class="leading-relaxed text-base"></p>
            </div>
          </div>

          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-4 rounded-lg pb-1">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <Image src={IMAGE7} alt="" />
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                TAILWIND
              </h2>
              <p class="leading-relaxed text-base"></p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4 ">
            <div class="border border-gray-200 p-4 rounded-lg pb-1">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 ">
                <Image src={IMAGE8} alt="" />
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                GITHUB
              </h2>
              <p class="leading-relaxed text-base"></p>
            </div>
          </div>

          <div class="xl:w-1/3 md:w-1/2 p-4 ">
            <div class="border border-gray-200 p-4 rounded-lg pb-1 ">
              <div class="w-10 h-10 inline-flex items-center justify-center text-indigo-500 ">
                <Image src={IMAGE9} alt="" />
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                GITHUB
              </h2>
              <p class="leading-relaxed text-base"></p>
            </div>
          </div>
        <div class="xl:w-1/3 md:w-1/2 p-4 ">
          <div class="border border-gray-200 p-4 rounded-lg pb-1 ">
            <div class="w-10 h-10 inline-flex items-center justify-center text-indigo-500 ">
              <Image src={IMAGE10} alt="" />
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
              TERMINAL DE COMMANDE
            </h2>
            <p class="leading-relaxed text-base"></p>
          </div>
        </div>
      </div>
        </div>
    </section>
  );
};

export default Travail;
