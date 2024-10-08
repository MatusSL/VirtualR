import video1 from "../assets/video1.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor modi
        corporis ex fugit repellendus reiciendis impedit veritatis nisi quae
        quaerat assumenda neque, molestias nemo sequi consequuntur velit laborum
        aliquid sunt!
      </p>
      <div className="flex justify-center my-10">
        <button
          type="button"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:text-neutral-800 transform duration-200"
        >
          Start for free
        </button>
        <button
          type="button"
          className="py-3 px-4 mx-3 rounded-md border hover:text-neutral-800 hover:bg-neutral-200 transform all duration-200"
        >
          Documentation
        </button>
      </div>
      <div className="flex my-10 justify-center">
        {" "}
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className="rounded-lg w-2/3 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
