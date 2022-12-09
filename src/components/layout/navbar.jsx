let styles = {
  nav: "w-full z-50 bg-black text-white fixed top-0 uppercase p-4",
  ul: "w-full flex flex-row justify-center",
};

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <a href="#" className="hover:text-violet-600">
            ACCUEIL
          </a>
        </li>
        <li>
          <a href="#parcours" className="hover:text-violet-600 px-8">
            PARCOURS
          </a>
        </li>
        <li className="">
          <a href="#competences" className="hover:text-violet-600">
            COMPETENCES
          </a>
        </li>
        <li className="px-8">
          <a href="#projets" className="hover:text-violet-600">
            PROJETS
          </a>
        </li>
        <li className="">
          <a href="#contact" className="hover:text-violet-600">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
