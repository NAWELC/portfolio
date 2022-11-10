import Image from "next/image";
import image from "@src/assets/img/photo-nawel.jpg";

let styles = {
  nom: "flex flex-col items-center  pt-8 italic text-3xl bg-red-200 ",
  divImg: "flex justify-center pb-2 pt-8",
};

const presentation = () => {
  return (
    <div className={styles.nom}>
      <h1>Chaib Nawel</h1>
      <div className={styles.divImg}>
        <Image
          src={image}
          title="image"
          className="rounded-full object-cover"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default presentation;
