
let styles = {
  nav: "w-full z-50 bg-black text-white fixed top-0 uppercase p-4",
  ul: "w-full flex flex-row justify-center",

};

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <a href="#" className="hover:text-violet-600">Accueil</a>
        </li>
        <li className="px-8">
          <a href="#" className="hover:text-violet-600">Introduction</a>
        </li>
        <li>
          <a href="#" className="hover:text-violet-600">Parcours</a>
        </li>
        <li className="px-8">
          <a href="#" className="hover:text-violet-600">Projets</a>
        </li>
        <li className="">
          <a href="#" className="hover:text-violet-600">Contact</a>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
