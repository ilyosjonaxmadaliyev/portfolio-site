import { AiOutlineCopyright } from "react-icons/ai";

function Footer ()
{
  return (
    <div className="bg-slate-500 p-4 flex justify-center">
      <h4 className="flex items-center sm:text-xl text-[#0c0b29]">
        <span className="mr-2">
          <AiOutlineCopyright />
        </span>
        Developed in 2023. I appreciate your visit!
      </h4>
    </div>
  );
}

export default Footer;
