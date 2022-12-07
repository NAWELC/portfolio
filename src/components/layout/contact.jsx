import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";

const Contact = () => {
  return (
    <div className="px-0 mx-auto " data-aos="zoom-in-up">
      <section className="text-gray-800 bg-[#BBF2D1] text-center">
        <div className="flex flex-col justify-center items-center lg:pt-8 pb-8">
     
          <h2 className="text-3xl font-bold mb-6 ">Contact</h2>
          <div className="md:mb-0 w-full md:w-6/12">
            <p className="text-gray-500 mb-6 w-full flex flex-col justify-center items-center ">
              <div className="mb-12 md:mb-0  md:w-full  lg:w-3/5">
                <form className="w-full">
                  <div className="form-group mb-6 flex flex-col justify-center items-center">
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
                      placeholder="Name"
                    ></input>
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="email"
                      className="form-control block
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
                      placeholder="Email address"
                    ></input>
                  </div>
                  <div className="form-group mb-6">
                    <textarea
                      className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700  focus:bg-white focus:border-blue-600 focus:outline-none
          "
                      id="exampleFormControlTextarea13"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="
          w-full
          px-6
          py-2.5
          bg-white
          text-black
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out "
                  >
                    ENVOI
                  </button>
                </form>
              </div>
            </p>
            <p className="text-black mb-2">
              <LocationOnIcon />
              77124 Villenoy
            </p>
            <p className="text-black mb-2">
              <MailIcon />
              nawelchaib@hotmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
