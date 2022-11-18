import { color } from "@mui/system";

let styles = {
  color: "bg-violet-600",
  flex: "flex justify-around pl-44 pt-8 ",
  nom: " flex justify-center pt-8 italic text-3xl ",

};

const Navbar = () => {
  return (
    <nav className={styles.color}>
      <ul className={styles.flex}>
        <li>
          <a href="#">accueil</a>
        </li>
        <li>
          <a href="#">à propos</a>
        </li>
        <li>
          <a href="#">projets</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
