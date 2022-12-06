import Image from "next/image";
import image from "@src/assets/img/photo-nawel.jpg";

let styles = {
  nom: "flex flex-col items-center py-20 italic text-3xl bg-[#F1C6E8]",
  divImg: "flex justify-center pb-2 pt-8",
};

const presentation = () => {
  return (
    <div className={styles.nom}>
      <div className ="font-Anton text-center " data-aos="fade-right">
        <h1>Bonjour, mon nom est</h1>
        <h1>Chaib Nawel ! Je suis</h1>
        <h1>Développeuse web Front-End</h1>
      </div>
      <div className={styles.divImg}>
        <Image
        className="rounded-full object-cover" data-aos="zoom-in-up"
          src={image}
          alt=""
          title=""
          width={100}
          height={100}
        />
      </div>

      

    </div>
  );
};

export default presentation;
