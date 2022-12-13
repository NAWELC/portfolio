import Image from "next/image";
import image from "@src/assets/img/photo-nawel.jpg";

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
          src={image}
          alt=""
          title=""
          width={100}
          height={100}
        />
      </div>
      <div className="font-Anton text-center text-4xl" data-aos="fade-right">
        <h1>Bonjour, mon nom est</h1>
        <h1>Chaib Nawel ! Je suis une</h1>
        <h1>Développeuse web Front-End</h1>
      </div>
      <p className="font-Berkshire_Swash text-center text-xl mx-80 p-20 leading-8">
        Je suis actuellement en formation de Developpeur-web web mobile a
        l&apos;Acces Code School,je suis à la recherche d&apos;un stage du 9
        janvier au 3 mars 2023. En reconversion professionnelle ,je suis
        passionnée par l&apos;informatique depuis toujours. Ce que j&apos;aime
        dans ce métier ,c&apos;est le coté créatif et travailler sur des projets
        nouveaux afin d&apos;enrichir mes connaissances et évoluer dans ce
        domaine et donner le meilleur de moi-même .
      </p>
    </div>
  );
};

export default presentation;
