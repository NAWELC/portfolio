import Image from "next/image";
import image1 from "@src/assets/img/photonawel.jpg";
import { TypeAnimation } from "react-type-animation";

let styles = {
  nom: "min-h-screen flex flex-col justify-center items-center py-20 text-3xl bg-[#F1C6E8]",
  divImg: "",
};

const presentation = () => {
  return (
    <div className={styles.nom}>
      <div className={styles.divImg}>
        <Image
          className="rounded-full object-cover"
          data-aos="zoom-in-up"
          src={image1}
          alt=""
          title=""
          width={100}
          height={100}
        />
      </div>
      <div
        className="font-Anton text-center text-4xl"
        data-aos="fade-right"
        data-aos-once="false"
      >
        <h1>Bonjour, mon nom est Chaib Nawel !</h1>
        <h1>
          Je suis une développeuse
          <TypeAnimation
            sequence={[
              "web", // Types 'One'
              1000, // Waits 1s
              "web Front-End", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              () => {
                console.log("Done typing!"); // Place optional callbacks anywhere in the array
              },
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
        </h1>
      </div>
      <p
        className="font-Berkshire_Swash text-center text-xl mx-80 p-20 leading-8"
        data-aos-once="false"
      >
        Je suis actuellement en formation de développeur web et web mobile à
        l&apos;Acces Code School et je suis à la recherche d&apos;un stage du 09
        janvier au 03 mars 2023.
        <br />
        En reconversion professionnelle ,j&apos;aspire à travailler dans le
        domaine de l&apos;informatique, domaine qui me passionne depuis
        toujours. Ce que j&apos;aime dans ce métier ,c&apos;est le coté créatif
        et la possibilité d&apos;entreprendre des projets divers et variés. Cela
        m&apos;amène à enrichir mes connaissances et à évoluer afin de donner le
        meilleur de moi-même.
      </p>
    </div>
  );
};

export default presentation;
