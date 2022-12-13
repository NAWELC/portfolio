import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";

const Contact = () => {
  return (
    <div className="px-0 mx-auto pt-" data-aos="zoom-in-up" data-aos-once="false">
      <section className="text-gray-800 bg-[#BBF2D1] text-center">
        <div className="flex flex-col justify-center items-center">
          <h1
            href="#contact"
            className="text-3xl font-Anton underline mb-6 uppercase pt-20"
            id="contact"
          >
            Contact
          </h1>
          <div className="md:mb-0 w-full md:w-6/12 py-24">
            <p className="text-gray-500 mb-6 w-full flex flex-col justify-center items-center ">
              <div className="mb-12 md:mb-0  md:w-full  lg:w-3/5">
                <form className="w-full">
                  <div className="form-group font-Berkshire_Swash mb-6 flex flex-col justify-center items-center">
                    <label htmlFor="" className="py-2">
                      Votre nom complet :
                    </label>
                    <input
                      type="text"
                      className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-white
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-white : focus:border-blue-600 focus:outline-none"
                      id="exampleInput7"
                      placeholder="Votre nom complet"
                    ></input>
                  </div>
                  <div className="form-group mb-6 font-Berkshire_Swash">
                    <label htmlFor="" className="">
                      Votre adresse e-mail :
                    </label>
                    <input
                      type="email"
                      className="form-control block mt-2
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-black
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput8"
                      placeholder="Votre adresse e-mail"
                    ></input>
                  </div>
                  <div className="form-group mb-6 font-Berkshire_Swash">
                    <label htmlFor="">Votre message :</label>
                    <textarea
                      className="mt-2 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid  border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlTextarea13"
                      rows="3"
                      placeholder="Votre message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6
          py-2.5
          bg-white
          text-black
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-pink-500 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out font-Berkshire_Swash"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </p>
            <div className="my-8 inline-flex text-black font-Anton">
              <p className="flex flex-col items-center mr-4">
                <MailIcon />
                <a
                  href="mailto:contact@chaib-portfolio.fr"
                  className="hover:transition hover:ease-in-out hover:text-pink-500"
                >
                  contact@chaib-portfolio.fr
                </a>
              </p>
              <p className="flex flex-col items-center ml-4">
                <LocationOnIcon />
                <a
                  href="https://www.google.com/maps/place/77124+Villenoy/@48.9406011,2.8165924,13z/data=!3m1!4b1!4m5!3m4!1s0x47e8a0c0cad1226b:0x40b82c3688c4700!8m2!3d48.944224!4d2.865699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:transition hover:ease-in-out hover:text-pink-500"
                >
                  Villenoy 77124
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
