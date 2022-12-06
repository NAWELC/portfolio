import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
let styles = {
  FTdiv: "flex flex-col",
};

const Footer = () => {
  return (
    <footer>
      <div class="p-10 m- mx-30 text-center lg:text-center text-white bg-black">
        <a href="https://github.com/NAWELC">
          <GitHubIcon className="" fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/nawel-chaib/">
          <LinkedInIcon className="mx-4 lg:mx-8" fontSize="large" />
        </a>
        <LocalPhoneIcon classname="" fontsize="large" />
      </div>
    </footer>
  );
};

export default Footer;
