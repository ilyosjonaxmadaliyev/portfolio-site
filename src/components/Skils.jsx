const skills = [
  "HTML 5",
  "CSS 3",
  "SCSS",
  "JAVASCRIPT",
  "TYPESCRIPT (basic)",
  "REACT JS",
  "REDUX-TOOLKIT",
  "REST-API",
  "TAILWIND CSS",
  "BOOTSTRAP",
  "GIT",
  "Backend basics with NODE JS",
  "DATABASE",
];
const tools = [
  "FIGMA",
  "VS-CODE",
  "GITHUB",
  "POSTMAN",
  "DOCKER",
  "GOOGLE CHROME",
];

function Skils() {
  return (
    <div id="skils" className="max-w-[1140px] m-auto md:pl-20 p-4 pt-24">
      <h1 className="text-4xl font-bold text-start text-[#094e12]">Skills</h1>
      <div className="border-l-4 border-[#094e12] ">
        <p className="pt-4 text-xl text-[#16205b] pl-4">
          In our century, which is developing in every field, it is necessary to
          continuously master the advanced technologies related to our field.
          Learning HTML, CSS, and JavaScript is no longer enough to become a
          good front-end developer. So I wanted to list some of the skills I've
          learned so far that are essential for a strong front-end developer.
          And these are:
        </p>
        <h3 className="text-xl py-6 font-bold text-[#255c2d]">
          Technical skills
        </h3>
        <div className="flex flex-wrap pl-4">
          {skills.map((skil) => {
            return (
              <h5 key={skil} className="font-bold text-[#09190a]">
                <span className="px-2 text-green-600">*</span>
                {skil}
              </h5>
            );
          })}
        </div>
        <h3 className="text-xl py-6 font-bold text-[#255c2d]">
          Programs used
        </h3>
        <div className="flex flex-wrap pl-4">
          {tools.map((tool) => {
            return (
              <h5 key={tool} className="font-bold text-[#09190a]">
                <span className="px-2 text-green-600">*</span>
                {tool}
              </h5>
            );
          })}
        </div>
        <h3 className="text-xl py-6 font-bold text-[#255c2d]">
          Languages
        </h3>
        <div className="flex flex-wrap pl-4">
              <h5 className="font-bold text-[#09190a]">
                <span className="px-2 text-green-600">*</span>
                Uzbek - (native)
              </h5>
              <h5 className="font-bold text-[#09190a]">
                <span className="px-2 text-green-600">*</span>
                Russian - (B1 medium)
              </h5>
              <h5 className="font-bold text-[#09190a]">
                <span className="px-2 text-green-600">*</span>
                English - (A2 basic)
              </h5>
        </div>
      </div>
    </div>
  );
}

export default Skils;
