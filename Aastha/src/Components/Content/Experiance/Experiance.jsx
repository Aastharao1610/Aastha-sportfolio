import ExperienceCard from "./ExperianceCard";

function Experiance() {
  return (
    <>
      <div className=" mx-20 my-7">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:mb-4 mb-8 sm:mb-12 font-semibold py-4 text-center sm:text-left">
          Where I've worked
        </h1>
        <hr className="w-1/2 sm:w-1/3 md:w-1/4 border-gray-500 mb-8 sm:mb-10 mx-auto sm:mx-0" />
      </div>
      <div className="flex flex-col items-center">
        {/* <ExperienceCard
        company="LEJHRO"
        position="Next js. Developer"
        Image={"/Exp/lehjro.png"}
        period="October 2024 - Present"
        description="Built responsive, user-friendly interfaces using Next.js and Tailwind CSS, optimizing for both mobile and desktop performance."
      /> */}
        <ExperienceCard
          company="Web Alchemy Digital Solutions"
          position="Frontend Developer Intern"
          Image={"/Exp/webalchemy.jpeg"}
          period="May 2024 - August 2024"
          description="Redesigned the UI with React.js for a modern, mobile-responsive look, creating reusable components and enhancing accessibility."
        />
      </div>

      <div className="bg-black text-white w-full py-12 text-center capitalize text-2xl">
        <a
          href="/Resume/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white  hover:text-gray-300"
        >
          View my Resume <span className="ml-1">→</span>
        </a>
      </div>
    </>
  );
}

export default Experiance;
