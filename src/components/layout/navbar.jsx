let styles = {
  nav: "font-Anton w-full z-50 bg-black text-white fixed top-0 uppercase p-4",
  ul: "w-full flex flex-row justify-center",
};

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <a
            href="#"
            className="hover:transition hover:ease-in-out hover:text-pink-500"
          >
            ACCUEIL
          </a>
        </li>
        <li>
          <a
            href="#parcours"
            className="hover:transition hover:ease-in-out hover:text-pink-500 px-8"
          >
            PARCOURS
          </a>
        </li>
        <li className="">
          <a
            href="#competences"
            className="hover:transition hover:ease-in-out hover:text-pink-500"
          >
            COMPETENCES
          </a>
        </li>
        <li className="px-8">
          <a
            href="#projets"
            className="hover:transition hover:ease-in-out hover:text-pink-500"
          >
            PROJETS
          </a>
        </li>
        <li className="">
          <a
            href="#contact"
            className="hover:transition hover:ease-in-out hover:text-pink-500"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
