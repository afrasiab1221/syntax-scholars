import mepy from "../assets/mepy.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-primary sm:h-full  text-light flex flex-col md:flex-row items-center justify-center my-10 mb-20 gap-8 px-6 h-auto ">
      {/* Text Content */}
      <div className="pl-10 max-w-lg text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Learn with Syntax Scholars
        </h1>
        <p className="text-lg mb-6">
          Join our courses and boost your coding skills with expert guidance.
        </p>
        <button className=" cursor-pointer bg-accent text-primary px-6 py-3 rounded hover:opacity-90 transition">
          <Link
            to="/Courses"
            className="cursor-pointer bg-accent text-primary px-6 py-3 rounded hover:opacity-90 transition inline-block"
          >
            Get Started
          </Link>
        </button>
      </div>

      {/* Image / Illustration */}
      <div className="w-full md:w-1/2">
        <img
          src={mepy}
          alt="Learning illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
