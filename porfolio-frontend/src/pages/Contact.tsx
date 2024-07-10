import { IconType } from "react-icons";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

export const contactMedias: { Icon: IconType, content: string, link?: string }[] = [
  {
    Icon: IoMail,
    content: "martinhaas2005@gmail.com",
    link: "mailto:martinhaas2005@gmail.com"
  },
  {
    Icon: FaWhatsapp,
    content: "+55 (54) 9 9999-1497"
  },
  {
    Icon: FaLinkedin,
    content: "linkedin.com/in/mg-haas",
    link: "https://linkedin.com/in/mg-haas"
  }
]

const Contact = () => {

  return (
    <div className="flex flex-col justify-center gap-10 items-center w-full h-full">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold leading-10 text-center">got interested?</h1>
        <span>don't be afraid to contact me</span>
      </div>
      <ul className="flex flex-col gap-5">
        {contactMedias.map(media => (
          <li className="flex items-center gap-5" key={media.content}>
            <media.Icon className="text-4xl" />
            {media.link &&
              <Link className="text-2xl font-medium" to={media.link} target="_blank">
                {media.content}
              </Link>
              ||
              <span className="text-2xl font-medium">
                {media.content}
              </span>
            }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Contact;
