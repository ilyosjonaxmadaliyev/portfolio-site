function About() {
  return (
    <div id="about" className="max-w-[1140px] m-auto md:pl-20 p-4 pt-24">
      <h1 className="text-4xl font-bold text-start text-[#001b5e]">About Me</h1>
      <div className="border-l-4 border-[#001b5e] ">
        <p className="py-4 text-xl text-[#16205b] pl-4">
          Nowadays, it is difficult to imagine the world without digital
          technologies. Therefore, the demand for "IT" specialists is very high
          and we are witnessing that this demand is increasing more and more.
          For this reason, I decided to keep up with the times and study
          "PROGRAMMING" based on my interests. I am currently working as a
          FrontEnd Developer in web development. My goal is to gain experience
          and contribute to the development of the company I work for, to become
          a world-class specialist!
        </p>
        <h4 className="text-2xl font-bold text-[#203966]">Education</h4>
        <p className="pt-4 text-xl text-[#16205b] pl-4">
          <a
            target="blank"
            className="italic text-sky-700"
            href="https://najottalim.uz/"
          >
            "NAJOT TA'LIM"
          </a>{" "}
          modern vocational training center, <br />
          <a
            target="blank"
            className="italic text-sky-700"
            href="https://yandex.uz/maps/org/128069515051/?ll=70.442642%2C35.537627&z=4.72"
          >
            Fergana branch
          </a>
          . 2022 - 2023 in the direction of Frontend -
          <a
            target="blank"
            className="italic text-sky-700"
            href="https://react.dev"
          >
            React Js
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
