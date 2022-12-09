import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
let styles = {
  FTdiv: "flex flex-col",
};

const Footer = () => {
  return (
    <footer className="text-white bg-black">
      <div class="py-8 flex justify-center text-white bg-black">
        <a href="https://github.com/NAWELC">
          <GitHubIcon className="mr-2" fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/nawel-chaib/">
          <LinkedInIcon className="ml-2" fontSize="large" />
        </a>
      </div>
      <div className="flex flex-col items-center pb-8">
        <p>Tous droits réservés</p>
        <p>Nawel Chaib - 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
