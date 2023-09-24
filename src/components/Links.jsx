import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaFacebook,
} from "react-icons/fa";

const links = [
  {
    id: 1,
    element: <FaTelegram size={25} />,
    url: "https://t.me/ilyosaxmadali",
  },
  {
    id: 2,
    element: <FaInstagram size={25} />,
    url: "https://www.instagram.com/ilyos_axmadali/",
  },
  {
    id: 3,
    element: <FaFacebook size={25} />,
    url: "https://www.facebook.com/ilyos.axmadaliyev.9?mibextid=ZbWKwL",
  },
  {
    id: 4,
    element: <FaGithub size={25} />,
    url: "https://github.com/ilyosjonaxmadaliyev",
  },
  {
    id: 5,
    element: <FaLinkedin size={25} />,
    url: "https://www.linkedin.com/feed/",
  },
  ,
];

function Links() {
  return (
    <>
      {links.map((link) => {
        return (
          <a
            target="blank"
            key={link.id}
            href={link.url}
            className="text-gray-300 shadow-lg  cursor-pointer hover:text-gray-500 hover:scale-110 ease-in duration-200"
          >
            {link.element}
          </a>
        );
      })}
    </>
  );
}

export default Links;
